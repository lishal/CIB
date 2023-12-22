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
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: DepartmentService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddDepartmentComponent, {
      header: `Add Department`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data !== undefined) {
        if (data[1] === true) {
          // const date = new Date(data[0].date);
          // const newDate = date.toISOString().split('T')[0];
          // data[0].date=newDate
          this.data.push(data[0]);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data added successfully',
          });
        }
      }
    });
  }

  showData(deptName: string) {
    const displayData = this.data.find((data) => data.deptName === deptName);
    this.ref = this.dialogService.open(ViewDepartmentComponent, {
      header: `Detailed View of ${displayData.deptName}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: displayData,
    });

    // this.ref.onClose.subscribe((product: Product) => {

    // });

    // this.ref.onMaximize.subscribe((value) => {

    // });
  }
  editData(deptName: string) {
    const editData = this.data.find((data) => data.deptName === deptName);
    this.ref = this.dialogService.open(EditDepartmentComponent, {
      header: `Edit department for ${deptName}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: editData,
    });
    this.ref.onClose.subscribe((datas: any) => {
      if (datas !== undefined) {
        if (datas[1] === true) {
          const index = this.data.findIndex(
            (data) => data.deptName === deptName
          );
          this.data[index].deptName = datas[0].deptName;
          this.data[index].shortName = datas[0].shortName;
          this.data[index].parentIdentifer = datas[0].parentIdentifer;
          this.data[index].deptAddress = datas[0].deptAddress;
          this.data[index].phoneNo = datas[0].phoneNo;
          this.data[index].psegHead = datas[0].psegHead;
          this.data[index].ssegHead = datas[0].ssegHead;
          this.data[index].faxno = datas[0].faxno;
          this.data[index].establishedDate = datas[0].establishedDate;
          this.data[index].depemail = datas[0].depemail;
          this.data[index].emailtopsh = datas[0].emailtopsh;
          this.data[index].emailtossh = datas[0].emailtossh;
          this.data[index].deptfun = datas[0].deptfun;
          this.data[index].isActive = datas[0].isActive;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(deptName: string) {
    const deleteData = this.data.find((data) => data.deptName === deptName);
    this.ref = this.dialogService.open(DeleteDepartmentComponent, {
      header: `Delete Branch for ${deptName} id`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.deptName === deptName);
        this.data.splice(index, 1);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data deleted successfully',
        });
      } else if (data === 'rejected') {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      }
    });
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
