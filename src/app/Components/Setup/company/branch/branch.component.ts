import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
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
  @ViewChild('filterSOLID') filterSOLID!: OverlayPanel;
  @ViewChild('filterNAME') filterNAME!: OverlayPanel;
  @ViewChild('filterDISTRICT') filterDISTRICT!: OverlayPanel;
  @ViewChild('filterADDRESS') filterADDRESS!: OverlayPanel;
  @ViewChild('filterEMAIL') filterEMAIL!: OverlayPanel;
  @ViewChild('filterCUTOFF') filterCUTOFF!: OverlayPanel;
  data: any[] = [];
  request:request={
    first:0,
    rows:5,
    sortField:'',
    sortOrder:1,
    filterRequest:[]
  }
  toBeFiltered:any[]=[];
  filterIconSOLID: string = 'fa-solid fa-filter';
  filterLabelSOLID: string = '';
  filterIconNAME: string = 'fa-solid fa-filter';
  filterLabelNAME: string = '';
  filterIconDISTRICT: string = 'fa-solid fa-filter';
  filterLabelDISTRICT: string = '';
  filterIconADDRESS: string = 'fa-solid fa-filter';
  filterLabelADDRESS: string = '';
  filterIconEMAIL: string = 'fa-solid fa-filter';
  filterLabelEMAIL: string = '';
  filterIconCUTOFF: string = 'fa-solid fa-filter';
  filterLabelCUTOFF: string = '';
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
  
  reset(fieldName:string,value:string){
    const mode='reset';
    value='';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='fa-solid fa-filter';
      this.filterLabelSOLID='';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='fa-solid fa-filter';
      this.filterLabelNAME='';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='fa-solid fa-filter';
      this.filterLabelDISTRICT='';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='fa-solid fa-filter';
      this.filterLabelADDRESS='';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='fa-solid fa-filter';
      this.filterLabelEMAIL='';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='fa-solid fa-filter';
      this.filterLabelCUTOFF='';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
    // console.log(this.toBeFiltered)
  }
  equal(fieldName:string,value:string){
    const mode='equal';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='=';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='=';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='=';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='=';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='=';
      this.filterEMAIL.hide()
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='=';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
    // console.log(this.toBeFiltered)
  }
  notEqual(fieldName:string,value:string){
    const mode='notEqual';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='!=';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='!=';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='!=';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='!=';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='!=';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='!=';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  greater(fieldName:string,value:string){
    const mode='greater';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='>';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='>';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='>';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='>';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='>';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='>';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  greaterEqual(fieldName:string,value:string){
    const mode='greaterEqual';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='>=';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='>=';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='>=';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='>=';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='>=';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='>=';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  less(fieldName:string,value:string){
    const mode='less';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='<';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='<';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='<';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='<';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='<';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='<';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  lessEqual(fieldName:string,value:string){
    const mode='lessEqual';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='<=';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='<=';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='<=';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='<=';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='<=';
      this.filterEMAIL.hide();
    }
    else if(fieldName==='CUTOFF'){
      this.filterIconCUTOFF='';
      this.filterLabelCUTOFF='<=';
      this.filterCUTOFF.hide();
    }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  starts(fieldName:string,value:string){
    const mode='startsWith';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='sw';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='sw';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='sw';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='sw';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='sw';
      this.filterEMAIL.hide();
    }
    // else if(fieldName==='CUTOFF'){
    //   this.filterIconCUTOFF='';
    //   this.filterLabelCUTOFF='sw';
    //   this.filterCUTOFF.hide();
    // }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  ends(fieldName:string,value:string){
    const mode='endsWith';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='ew';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='ew';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='ew';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='ew';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='ew';
      this.filterEMAIL.hide();
    }
    // else if(fieldName==='CUTOFF'){
    //   this.filterIconCUTOFF='';
    //   this.filterLabelCUTOFF='ew';
    //   this.filterCUTOFF.hide();
    // }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
    }
    this.request={
      ...this.request,
      first:0,
      filterRequest:this.toBeFiltered
    }
    this.getBranchData()
  }
  contains(fieldName:string,value:string){
    const mode='contains';
    if(fieldName==='SOLID'){
      this.filterIconSOLID='';
      this.filterLabelSOLID='ss';
      this.filterSOLID.hide();
    }
    else if(fieldName==='NAME'){
      this.filterIconNAME='';
      this.filterLabelNAME='ss';
      this.filterNAME.hide();
    }
    else if(fieldName==='DISTRICT'){
      this.filterIconDISTRICT='';
      this.filterLabelDISTRICT='ss';
      this.filterDISTRICT.hide();
    }
    else if(fieldName==='ADDRESS'){
      this.filterIconADDRESS='';
      this.filterLabelADDRESS='ss';
      this.filterADDRESS.hide();
    }
    else if(fieldName==='EMAIL'){
      this.filterIconEMAIL='';
      this.filterLabelEMAIL='ss';
      this.filterEMAIL.hide();
    }
    // else if(fieldName==='CUTOFF'){
    //   this.filterIconCUTOFF='';
    //   this.filterLabelCUTOFF='ss';
    //   this.filterCUTOFF.hide();
    // }
    const index = this.toBeFiltered.findIndex(data => data.fieldName === fieldName );
    if (index === -1) {
      this.toBeFiltered.push({'fieldName':fieldName,'mode':mode,'value':value});
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...{'fieldName':fieldName,'mode':mode,'value':value} };
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
