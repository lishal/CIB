import { Component, OnInit, OnDestroy } from '@angular/core';
import { BranchService } from '../../../../Services/Setup/Company/branch.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditBranchComponent } from './edit/edit.component';
import { ViewBranchComponent } from './view/view.component';
import { DeleteBranchComponent } from './delete/delete.component';
import { AddBranchComponent } from './add/add.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [DialogService, MessageService],
})
export class BranchComponent {
  data: any[] = [{
    accountMonitoring: false,
    branchAddress: "test",
    branchManagerEmailId: "lbhari188@gmail.com",
    branchName: "test",
    branchNameNepali:"test",
    dataProviderBranchId:"test",
    district:"Sindhuli",
    insurance:false,
    isActive:true,
    pendingDocument:true,
    performanceCutOff:"test",
    phoneNo:"1234567890",
    previousDataProviderBranchId:"test",
    provinceName:"karnali",
    stockInspection: true
  }];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: BranchService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddBranchComponent, {
      header: `Add Province`,
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

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewBranchComponent, {
      header: `Detailed View of ${displayData.account_number} account number`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: displayData,
    });
  }
  editData(dataProviderBranchId: string) {
    const editData = this.data.find((data) => data.dataProviderBranchId === dataProviderBranchId);
    this.ref = this.dialogService.open(EditBranchComponent, {
      header: `Edit Province of ${dataProviderBranchId} `,
      width: '90%',
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
            (data) => data.dataProviderBranchId === dataProviderBranchId
          );
          this.data[index].branchName = data[0].branchName;
          this.data[index].branchNameNepali = data[0].branchNameNepali;
          this.data[index].dataProviderBranchId = data[0].dataProviderBranchId;
          this.data[index].previousDataProviderBranchId = data[0].previousDataProviderBranchId;
          this.data[index].district = data[0].district;
          this.data[index].provinceName = data[0].provinceName;
          this.data[index].branchAddress = data[0].branchAddress;
          this.data[index].phoneNo = data[0].phoneNo;
          this.data[index].branchManagerEmailId = data[0].branchManagerEmailId;
          this.data[index].performanceCutOff = data[0].performanceCutOff;
          this.data[index].isActive = data[0].isActive;
          this.data[index].accountMonitoring = data[0].accountMonitoring;
          this.data[index].stockInspection = data[0].stockInspection;
          this.data[index].pendingDocument = data[0].pendingDocument;
          this.data[index].insurance = data[0].insurance;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data added successfully',
          });
        }
      }
    });
  }
  deleteData(id: number) {
    const deleteData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(DeleteBranchComponent, {
      header: `Edit Province for ${id} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
  }
  ngOnInit(): void {
    // this.isLoading = true;
    // this.api.fetchData().subscribe(
    //   (response) => {
    //     this.data = response;
    //     this.isLoading = false;
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
