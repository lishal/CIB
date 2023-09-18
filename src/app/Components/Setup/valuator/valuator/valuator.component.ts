import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ValuatorService } from 'src/app/Services/Setup/valuator.service';
import { AddValuatorComponent } from './add/add.component';
import { EditValuatorComponent } from './edit/edit.component';
import { ViewValuatorComponent } from './view/view.component';
import { DeleteValuatorComponent } from './delete/delete.component';
import * as FileSaver from 'file-saver';
import { AddValuatorDocumentComponent } from './valuatorDocument/add/add.component';

@Component({
  selector: 'app-inner-valuator',
  templateUrl: './valuator.component.html',
  styleUrls: ['./valuator.component.css'],
  providers: [MessageService, DialogService],
})
export class InnerValuatorComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: ValuatorService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddValuatorComponent, {
      header: `Add Valuator`,
      width: '90%',
      height: '90%',
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
  editData(vettype: string) {
    const editData = this.data.find((data) => data.vettype === vettype);
    this.ref = this.dialogService.open(EditValuatorComponent, {
      header: `Edit Valuator for ${vettype}`,
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
            (data) => data.loginIdentifer === vettype
          );
          // this.data[index].vettype = datas[0].vettype;  -->Update the value in DB
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  viewData(vettype: string){
    const viewData = this.data.find((data) => data.vettype === vettype);
    this.ref = this.dialogService.open(ViewValuatorComponent, {
      header: `Edit valuator for ${vettype}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: viewData,
    });
  }
  deleteData(vettype: string) {
    const deleteData = this.data.find((data) => data.vettype === vettype);
    this.ref = this.dialogService.open(DeleteValuatorComponent, {
      header: `Delete Branch for ${vettype} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.vettype === vettype);
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
  addValuatorDocument(){
    this.ref = this.dialogService.open(AddValuatorDocumentComponent, {
      header: `Add Valuator Document`,
      width: '90%',
      height: '90%',
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
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Valuator');
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
    this.data = [
      {
        test: 'test',
        test2: 'test2',
        vettype:'VETType',
        id: [
          {
            name: 'test',
          },
        ],
      },
    ];
  }
}
