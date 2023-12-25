import { Component } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import {
  UserService,
  userRequest,
} from 'src/app/Services/Setup/Company/user.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { ViewUserComponent } from './view/view.component';
import { DeleteUserComponent } from './delete/delete.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DialogService, MessageService],
})
export class UserComponent {
  data: any[] = [];
  request: userRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filterRequest: [],
  };
  toBeFiltered: any[] = [];
  totalRecords: number = 0;
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  branchData: { id: number; name: string }[] = [];
  departmentData: { id: number; name: string }[] = [];
  roleData: { id: number; name: string }[] = [];
  innerdata: any;
  constructor(
    private api: UserService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public loadingService: LoadingService
  ) {}

  async addData() {
    this.loadingService.show();
    await this.getBranchData();
    await this.getDepartmentData();
    await this.getRoleData();
    this.loadingService.hide();
    this.ref = this.dialogService.open(AddUserComponent, {
      header: 'User : Add',
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [this.branchData, this.departmentData, this.roleData],
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
  async editData(id: string) {
    this.loadingService.show();
    await this.individualData(id);
    await this.getBranchData();
    await this.getDepartmentData();
    await this.getRoleData();
    this.loadingService.hide();
    this.ref = this.dialogService.open(EditUserComponent, {
      header: `User : Edit - ${this.innerdata.fullName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [
        this.branchData,
        this.departmentData,
        this.roleData,
        this.innerdata,
      ],
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === true) {
        this.getBranchData();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data updated successfully!',
        });
      }
      this.loadingService.hide();
    });
    this.loadingService.hide();
  }
  async showData(id: string) {
    this.loadingService.show();
    await this.individualData(id);
    await this.getBranchData();
    await this.getDepartmentData();
    await this.getRoleData();
    this.loadingService.hide();
    this.ref = this.dialogService.open(ViewUserComponent, {
      header: `Role : View - ${this.innerdata.fullName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [
        this.branchData,
        this.departmentData,
        this.roleData,
        this.innerdata,
      ],
    });
  }
  async deleteData(id: string) {
    this.loadingService.show();
    await this.individualData(id);
    await this.getBranchData();
    await this.getDepartmentData();
    await this.getRoleData();
    this.loadingService.hide();
    this.ref = this.dialogService.open(DeleteUserComponent, {
      header: `Role : Delete - ${this.innerdata.fullName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [
        this.branchData,
        this.departmentData,
        this.roleData,
        this.innerdata,
      ],
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        this.getUserData();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data Deleted successfully!',
        });
      }
      this.loadingService.hide();
    });
    this.loadingService.hide();
  }
  async individualData(id: string): Promise<any> {
    return new Promise((resolve) => {
      this.api.viewUserData(id).subscribe(
        (response) => {
          this.innerdata = response;
          resolve(this.innerdata);
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
        }
      );
    });
  }
  async getBranchData(): Promise<any> {
    return new Promise((resolve) => {
      this.api.getUserBranchData().subscribe(
        (response) => {
          response.value.map((item) => {
            this.branchData.push({
              id: item.Id,
              name: item.NAME,
            });
          });
          resolve(this.branchData);
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
        }
      );
    });
  }
  async getDepartmentData(): Promise<any> {
    return new Promise((resolve) => {
      this.api.getUserDepartmentData().subscribe(
        (response) => {
          response.value.map((item) => {
            this.departmentData.push({
              id: item.Id,
              name: item.NAME,
            });
          });
          resolve(this.departmentData);
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
        }
      );
    });
  }
  async getRoleData(): Promise<any> {
    return new Promise((resolve) => {
      this.api.getUserRoleData().subscribe(
        (response) => {
          response.value.map((item) => {
            this.roleData.push({
              id: item.Id,
              name: item.NAME,
            });
          });
          resolve(this.roleData);
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
        }
      );
    });
  }

  async getUserData(): Promise<any> {
    return new Promise((resolve) => {
      this.isLoading = true;
      this.api.getUserData(this.request).subscribe(
        (response) => {
          this.data = response.value;
          this.totalRecords = response.count;
          this.isLoading = false;
          resolve(this.data);
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
    });
  }

  loadData($event: TableLazyLoadEvent) {
    this.request.first = $event.first || 0;
    this.request.rows = $event.rows || 5;
    this.request.sortField = $event.sortField || '';
    this.request.sortOrder = $event.sortOrder || 1;
    this.request.filterRequest = this.toBeFiltered || [];
    this.getUserData();
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
    this.getUserData();
  }
}
