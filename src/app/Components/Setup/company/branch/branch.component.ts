import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  BranchService,
  request,
} from '../../../../Services/Setup/Company/branch.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditBranchComponent } from './edit/edit.component';
import { ViewBranchComponent } from './view/view.component';
import { DeleteBranchComponent } from './delete/delete.component';
import { AddBranchComponent } from './add/add.component';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import * as FileSaver from 'file-saver';
import { TableLazyLoadEvent } from 'primeng/table';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [DialogService, MessageService],
})
export class BranchComponent implements OnDestroy {
  data: any[] = [];
  request: request = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filterRequest: [],
  };
  toBeFiltered: any[] = [];
  loadAddData: boolean = false;
  totalRecords: number = 0;
  clusterData: any;
  viewDatas: any;
  editDatas: any;
  deleteDatas: any;
  isLoading: boolean = true;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: BranchService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public loadingService: LoadingService
  ) {}

  async addData() {
    this.loadingService.show();
    await this.getClusterData();
    this.ref = this.dialogService.open(AddBranchComponent, {
      header: 'Branch : Add',
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: this.clusterData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === true) {
        this.getBranchData();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data added successfully!',
        });
      }
      this.loadingService.hide();
    });
  }

  async showData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    await this.getClusterData();
    this.ref = this.dialogService.open(ViewBranchComponent, {
      header: `Branch : View - ${this.viewDatas.branchName}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [this.viewDatas, this.clusterData],
    });
    this.loadingService.hide();
  }
  async editData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    await this.getClusterData();
    this.ref = this.dialogService.open(EditBranchComponent, {
      header: `Branch : Edit - ${this.viewDatas.branchName} `,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [this.viewDatas, this.clusterData],
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
  async deleteData(id: string) {
    this.loadingService.show();
    await this.viewData(id);
    await this.getClusterData();
    this.ref = this.dialogService.open(DeleteBranchComponent, {
      header: `Branch : Delete - ${this.viewDatas.branchName}`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: [this.viewDatas, this.clusterData],
    });
    this.loadingService.hide();
    // this.ref.onClose.subscribe((data: any) => {
    //   if (data === 'accepted') {
    //     const index = this.data.findIndex(
    //       (data) => data.dataProviderBranchId === dataProviderBranchId
    //     );
    //     this.data.splice(index, 1);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: 'Data deleted successfully',
    //     });
    //   } else if (data === 'rejected') {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Rejected',
    //       detail: 'You have rejected',
    //     });
    //   }
    // });
  }
  async getClusterData(): Promise<any> {
    return new Promise((resolve) => {
      this.api.getClusterData().subscribe(
        (response) => {
          this.clusterData = response;
          resolve(this.clusterData);
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
  async viewData(id: string): Promise<any> {
    return new Promise((resolve) => {
      this.api.viewData(id).subscribe(
        (response) => {
          this.viewDatas = response;
          resolve(this.viewDatas);
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
      this.isLoading = true;
      this.api.getBranchData(this.request).subscribe(
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
    this.getBranchData();
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
    this.getBranchData();
  }

  exportExcel(printDrop: OverlayPanel) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'branch');
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Excel file downloaded successfully',
    });
    printDrop.hide();
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
