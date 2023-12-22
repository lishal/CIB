import { Component, OnDestroy } from '@angular/core';
import {
  RoleService,
  roleRequest,
} from '../../../../Services/Setup/Company/role.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditRoleComponent } from './edit/edit.component';
import { ViewRoleComponent } from './view/view.component';
import { AddRoleComponent } from './add/add.component';
import { MessageService } from 'primeng/api';
import { DeleteRoleComponent } from './delete/delete.component';
import { TableLazyLoadEvent } from 'primeng/table';
import { LoadingService } from 'src/app/Services/loading.service';
import { __awaiter } from 'tslib';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [DialogService, MessageService],
})
export class RoleComponent implements OnDestroy {
  data: any[] = [];
  request: roleRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filterRequest: [],
  };
  innerData: any;
  dataloaded: boolean = false;
  totalRecords: number = 0;
  toBeFiltered: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: RoleService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public loadingService: LoadingService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddRoleComponent, {
      header: `Role : Add`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });
    this.ref.onClose.subscribe((data: any) => {
      this.loadingService.hide();
      if (data === true) {
        this.getRoleData();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data added successfully!',
        });
      }
    });
  }

  async showData(Id: string) {
    this.loadingService.show();
    await this.viewData(Id);
    this.loadingService.hide();
    this.ref = this.dialogService.open(ViewRoleComponent, {
      header: `Branch : View - ${this.innerData.roleName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.innerData,
    });

    // this.ref.onClose.subscribe((product: Product) => {

    // });

    // this.ref.onMaximize.subscribe((value) => {

    // });
  }
  editData(Id: string) {
    const editData = this.data.find((data) => data.Id === Id);
    this.ref = this.dialogService.open(EditRoleComponent, {
      header: `Edit role for ${editData.NAME} id`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((innerData: any) => {
      if (innerData !== undefined) {
        if (innerData[1] === true) {
          this.isLoading = true;
          // console.log(innerData[0])
          // this.api.updateRoleData(innerData[0]).subscribe(
          //   (response) => {
          //     console.log(response);
          //     const index = this.data.findIndex((data) => data.Id === Id);
          //     this.data[index].NAME = innerData[0].NAME;
          //     this.data[index].DESCRIPTION = innerData[0].DESCRIPTION;
          //     this.data[index].ACTIVE = innerData[0].ACTIVE;
          //     this.messageService.add({
          //       severity: 'success',
          //       summary: 'Success',
          //       detail: 'Data Updated successfully',
          //     });
          //     this.isLoading = false;
          //   },
          //   (error) => {
          //     console.log(error);
          //     this.messageService.add({
          //       severity: 'error',
          //       summary: 'Error',
          //       detail: 'Something went wrong',
          //     });
          //     this.isLoading = false;
          //   }
          // );
        }
      }
    });
  }
  deleteData(Id: string) {
    const deleteData = this.data.find((data) => data.Id === Id);
    this.ref = this.dialogService.open(DeleteRoleComponent, {
      header: `Delete Branch for ${deleteData.NAME}`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((innerData: any) => {
      if (innerData === 'accepted') {
        const index = this.data.findIndex((data) => data.Id === Id);
        this.isLoading = true;
        // this.api.deleteRoleData(this.data[index]).subscribe(
        //   (response) => {
        //     this.data.splice(index, 1);
        //     this.messageService.add({
        //       severity: 'success',
        //       summary: 'Success',
        //       detail: 'Data deleted successfully',
        //     });
        //     this.isLoading = false;
        //   },
        //   (error) => {
        //     console.log(error);
        //     this.messageService.add({
        //       severity: 'error',
        //       summary: 'Error',
        //       detail: 'Something went wrong',
        //     });
        //     this.isLoading = false;
        //   }
        // );
      } else if (innerData === 'rejected') {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      }
    });
  }
  getRoleData() {
    this.isLoading = true;
    this.api.getRoleData(this.request).subscribe(
      (response) => {
        this.data = response.value;
        this.totalRecords = response.count;
        this.isLoading = false;
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Internal Server Error!',
        });
        this.isLoading = false;
      }
    );
  }
  loadData($event: TableLazyLoadEvent) {
    this.request.first = $event.first || 0;
    this.request.rows = $event.rows || 5;
    this.request.sortField = $event.sortField || '';
    this.request.sortOrder = $event.sortOrder || 1;
    this.request.filterRequest = this.toBeFiltered || [];
    this.getRoleData();
  }
  filter(data: any, fieldName: string) {
    const index = this.toBeFiltered.findIndex(
      (data) => data.fieldName === fieldName
    );
    if (index === -1) {
      this.toBeFiltered.push(data);
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...data };
    }
    this.request = {
      ...this.request,
      first: 0,
      filterRequest: this.toBeFiltered,
    };
    this.getRoleData();
  }
  async viewData(id: string): Promise<any> {
    return new Promise((resolve) => {
      this.api.viewRoleData(id).subscribe(
        (response) => {
          this.innerData = response;
          resolve(this.innerData);
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
          this.loadingService.hide();
        }
      );
    });
  }
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
