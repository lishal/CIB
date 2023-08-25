import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProvinceService } from '../../../../Services/Setup/Company/province.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewProvinceComponent } from './view/view.component';
import { EditProvinceComponent } from './edit/edit.component';
import { AddProvinceComponent } from './add/add.component';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import { DeleteProvinceComponent } from './delete/delete.component';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css'],
  providers: [DialogService, MessageService],
})
export class ProvinceComponent implements OnInit, OnDestroy {
  data: any[] = [
    {
      provinceCode: 'gandaki',
      provinceName: 'Gandaki',
      provinceAddress: 'Gandaki',
      phoneNo: '9867232568',
      provinceManagerEmailID: 'lbhari188@gmail.com',
      isActive: true,
    },
    {
      provinceCode: 'bagmati',
      provinceName: 'bagmati',
      provinceAddress: 'bagmati',
      phoneNo: '9867232598',
      provinceManagerEmailID: 'lbhari@gmail.com',
      isActive: true,
    },
  ];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: ProvinceService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  addData() {
    this.ref = this.dialogService.open(AddProvinceComponent, {
      header: `Add Province`,
      width: '80%',
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
  showData(provinceCode: string) {
    const displayData = this.data.find(
      (data) => data.provinceCode === provinceCode
    );
    this.ref = this.dialogService.open(ViewProvinceComponent, {
      header: `Detailed View of ${displayData.provinceCode}`,
      width: '80%',
      height: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: displayData,
    });
  }
  editData(provinceCode: string) {
    const editData = this.data.find(
      (data) => data.provinceCode === provinceCode
    );
    this.ref = this.dialogService.open(EditProvinceComponent, {
      header: `Edit Province of ${provinceCode}`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data !== undefined) {
        if (data[1] === true) {
          const index = this.data.findIndex(
            (data) => data.provinceCode === provinceCode
          );
          this.data[index].provinceCode = data[0].provinceCode;
          this.data[index].provinceName = data[0].provinceName;
          this.data[index].provinceAddress = data[0].provinceAddress;
          this.data[index].phoneNo = data[0].phoneNo;
          this.data[index].provinceManagerEmailID =
            data[0].provinceManagerEmailID;
          this.data[index].isActive = data[0].isActive;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(provinceCode: string) {
    const deleteData = this.data.find(
      (data) => data.provinceCode === provinceCode
    );
    this.ref = this.dialogService.open(DeleteProvinceComponent, {
      header: `Delete ${deleteData.provinceCode}`,
      width: '80%',
      height: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex(
          (data) => data.provinceCode === provinceCode
        );
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

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'province');
    });
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
