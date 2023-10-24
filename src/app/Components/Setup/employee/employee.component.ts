import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeService } from 'src/app/Services/Setup/employee.service';
import { AddEmployeeComponent } from './add/add.component';
import { ViewEmployeeComponent } from './view/view.component';
import { EditEmployeeComponent } from './edit/edit.component';
import { DeleteEmployeeComponent } from './delete/delete.component';
import { OverlayPanel } from 'primeng/overlaypanel';

import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DialogService, MessageService],
})
export class EmployeeComponent implements OnInit {
  constructor(
    public api: EmployeeService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  addData() {
    this.ref = this.dialogService.open(AddEmployeeComponent, {
      header: `Add Staff`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data !== undefined) {
        if (data[1] === true) {
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
  // loginIdentifer


  showData(loginIdentifer: string) {
    const displayData = this.data.find((data) => data.loginIdentifer === loginIdentifer);
    this.ref = this.dialogService.open(ViewEmployeeComponent, {
      header: `Detailed View of ${displayData.deptName}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: displayData,
    });
  }
  editData(loginIdentifer: string) {
    const editData = this.data.find((data) => data.loginIdentifer === loginIdentifer);
    this.ref = this.dialogService.open(EditEmployeeComponent, {
      header: `Edit department for ${loginIdentifer}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((datas: any) => {
      if (datas !== undefined) {
        if (datas[1] === true) {
          const index = this.data.findIndex(
            (data) => data.loginIdentifer === loginIdentifer
          );
          this.data[index].loginIdentifer = datas[0].loginIdentifer;
          this.data[index].fullname = datas[0].fullname;
          this.data[index].staffCode = datas[0].staffCode;
          this.data[index].department = datas[0].department;
          this.data[index].defaultBranch = datas[0].defaultBranch;
          this.data[index].emailAddress = datas[0].emailAddress;
          this.data[index].roleName = datas[0].roleName;
          this.data[index].markerRight = datas[0].markerRight;
          this.data[index].restrictAccessByBranch = datas[0].restrictAccessByBranch;
          this.data[index].defaultModule = datas[0].defaultModule;
          this.data[index].enableChangeType = datas[0].enableChangeType;
          this.data[index].isActive = datas[0].isActive;
          this.data[index].passwordExpiryPeriod = datas[0].passwordExpiryPeriod;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(loginIdentifer: string) {
    const deleteData = this.data.find((data) => data.loginIdentifer === loginIdentifer);
    this.ref = this.dialogService.open(DeleteEmployeeComponent, {
      header: `Delete Branch for ${loginIdentifer} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.loginIdentifer === loginIdentifer);
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

  exportExcel(op: OverlayPanel) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'employee');
    });
    this.messageService.add({ severity: 'success', summary: 'Excel file downloaded successfully' });
    op.hide();
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  ngOnInit(): void {

    this.api.getEmployeeData().subscribe((response) => {
      console.log(response)
      // Now you can work with the data as needed.
    });
    // console.log(this.api.getEmployeeData())

    // this.data=[{
    //   loginIdentifer: 'Test1',
    //   fullname: 'Test',
    //   staffCode:'Test',
    //   department: 'Test',
    //   defaultBranch:'Test',
    //   emailAddress: 'Test@gmail.com',
    //   roleName: 'Test',
    //   markerRight:false,
    //   restrictAccessByBranch:false,
    //   defaultModule: '0', 
    //   enableChangeType:false,
    //   isActive: true,
    //   passwordExpiryPeriod: '10',
    // }]

    // RouteConfigLoadEnd
    // console.log(this.api)

    // console.log(this.api);
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
