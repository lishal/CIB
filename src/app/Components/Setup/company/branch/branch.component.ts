import { Component, OnInit, OnDestroy } from '@angular/core';
import { BranchService, request } from '../../../../Services/Setup/Company/branch.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditBranchComponent } from './edit/edit.component';
import { ViewBranchComponent } from './view/view.component';
import { DeleteBranchComponent } from './delete/delete.component';
import { AddBranchComponent } from './add/add.component';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import * as FileSaver from 'file-saver';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [DialogService, MessageService],
})
export class BranchComponent implements OnInit,OnDestroy{
  data: any[] = [];
  request:request={
    first:0,
    rows:10,
    sortField:'',
    sortOrder:1,
    filterRequest:[]
  }
  toBeFiltered:any[]=[];

  totalRecords:number=0;
  clusterData:any;
  isLoading: boolean = false;
  showAdd: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: BranchService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddBranchComponent, {
      header: `Add Branch`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:this.clusterData
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

  showData(dataProviderBranchId: string) {
    const displayData = this.data.find((data) => data.dataProviderBranchId === dataProviderBranchId);
    this.ref = this.dialogService.open(ViewBranchComponent, {
      header: `Detailed View of ${displayData.dataProviderBranchId}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: displayData,
    });
  }
  editData(dataProviderBranchId: string) {
    const editData = this.data.find(
      (data) => data.dataProviderBranchId === dataProviderBranchId
    );
    this.ref = this.dialogService.open(EditBranchComponent, {
      header: `Edit Branch of ${dataProviderBranchId} `,
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
            (data) => data.dataProviderBranchId === dataProviderBranchId
          );
          this.data[index].branchName = datas[0].branchName;
          this.data[index].branchNameNepali = datas[0].branchNameNepali;
          this.data[index].dataProviderBranchId = datas[0].dataProviderBranchId;
          this.data[index].previousDataProviderBranchId =
            datas[0].previousDataProviderBranchId;
          this.data[index].district = datas[0].district;
          this.data[index].provinceName = datas[0].provinceName;
          this.data[index].branchAddress = datas[0].branchAddress;
          this.data[index].phoneNo = datas[0].phoneNo;
          this.data[index].branchManagerEmailId = datas[0].branchManagerEmailId;
          this.data[index].performanceCutOff = datas[0].performanceCutOff;
          this.data[index].isActive = datas[0].isActive;
          this.data[index].accountMonitoring = datas[0].accountMonitoring;
          this.data[index].stockInspection = datas[0].stockInspection;
          this.data[index].pendingDocument = datas[0].pendingDocument;
          this.data[index].insurance = datas[0].insurance;
          dataProviderBranchId = datas[0].dataProviderBranchId;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(dataProviderBranchId: string) {
    const deleteData = this.data.find((data) => data.dataProviderBranchId === dataProviderBranchId);
    this.ref = this.dialogService.open(DeleteBranchComponent, {
      header: `Delete Branch for ${dataProviderBranchId} id`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex(
          (data) => data.dataProviderBranchId === dataProviderBranchId
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
  getClusterData(){
    this.api.getClusterData().subscribe((response)=>{
      this.clusterData=response;
      this.showAdd=true
    },()=>{
      this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Internal Server Error!',
    });
    this.showAdd=false;
  });  
 
  }
  ngOnInit(): void {
    this.getClusterData();
  }

  getBranchData(){
    setTimeout(() => {
      this.isLoading=true;
      this.api.getBranchData(this.request).subscribe((response)=>{
        this.data=response.value;
        this.totalRecords=response.count;
        this.isLoading=false 
      });
    }, 0);
  }

  loadData($event:TableLazyLoadEvent){
    this.request.first=$event.first || 0;
    this.request.rows=$event.rows || 5;
    this.request.sortField=$event.sortField || '';
    this.request.sortOrder=$event.sortOrder || 1;
    this.request.filterRequest=this.toBeFiltered || [];
    this.getBranchData();
  }

  filter(data:any,fieldName:string){
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push(data);
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...data };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  
  

  exportExcel(op: OverlayPanel) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'branch');
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

  
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
  
}
