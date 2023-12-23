import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DepartmentService,
  request,
} from '../../../../Services/Setup/Company/department.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewDepartmentComponent } from './view/view.component';
import { EditDepartmentComponent } from './edit/edit.component';
import { MessageService } from 'primeng/api';
import { AddDepartmentComponent } from './add/add.component';
import { DeleteDepartmentComponent } from './delete/delete.component';
import { TableLazyLoadEvent } from 'primeng/table';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DialogService, MessageService],
})
export class DepartmentComponent implements OnInit, OnDestroy {
  data: any[] = [];
  request: request = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filterRequest: [],
  };
  toBeFiltered: any[] = [];
  totalRecords: number = 0;
  isLoading: boolean = false;
  innerData: any;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: DepartmentService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public loadingService: LoadingService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddDepartmentComponent, {
      header: `Department : Add`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });
    this.ref.onClose.subscribe((data: any) => {
      this.loadingService.hide();
      if (data === true) {
        this.getDepartmentData();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data added successfully!',
        });
      }
    });
  }

  async showData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    this.loadingService.hide();
    this.ref = this.dialogService.open(ViewDepartmentComponent, {
      header: `Department : View - ${this.innerData.departmentName} `,
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
  async editData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    this.loadingService.hide();
    this.ref = this.dialogService.open(EditDepartmentComponent, {
      header: `Department : View - ${this.innerData.departmentName}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.innerData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === true) {
        this.getDepartmentData();
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
  async deleteData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    this.loadingService.hide();
    this.ref = this.dialogService.open(DeleteDepartmentComponent, {
      header: `Department : Delete - ${this.innerData.departmentName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.innerData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        this.getDepartmentData();
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
  async getDepartmentData(): Promise<any> {
    return new Promise((resolve) => {
      this.isLoading = true;
      this.api.getDepartmentData(this.request).subscribe(
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
    this.getDepartmentData();
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
    this.getDepartmentData();
  }
  async viewData(id: string): Promise<any> {
    return new Promise((resolve) => {
      this.api.viewDepartmentData(id).subscribe(
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
        }
      );
    });
  }
  ngOnInit(): void {
    // this.isLoading = true;
    // this.api.fetchData().subscribe(
    //   (response) => {
    //     this.data = response;
    //     this.isLoading = false;
    //     // console.log(this.data)
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   }
    // );
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
