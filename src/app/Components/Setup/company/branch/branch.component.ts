import { Component, OnInit ,OnDestroy } from '@angular/core';
import { BranchService } from '../../../../Services/Setup/Company/branch.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {EditBranchComponent} from './edit/edit.component'
import {ViewBranchComponent} from './view/view.component'
import { DeleteBranchComponent } from './delete/delete.component';
import { AddBranchComponent } from './add/add.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [DialogService]
})
export class BranchComponent {
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(private api: BranchService,public dialogService: DialogService) {}


  addData() {
    this.ref = this.dialogService.open(AddBranchComponent, {
      header: `Add Province`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
    // this.ref.onClose.subscribe((data: any) => {
    //   if (data !== undefined) {
    //     if (data[1] === true) {
    //       this.data.push(data[0]);
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Success',
    //         detail: 'Data added successfully',
    //       });
    //     }
    //   }
    // });
  }

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewBranchComponent, {
      header: `Detailed View of ${displayData.account_number} account number`,
      width: '90%',
      height:'60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : displayData
  });
  }
  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditBranchComponent, {
      header: `Edit Province for ${id} id`,
      width: '90%',
      height:'60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : editData
  });
  }
  deleteData(id: number) {
    const deleteData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(DeleteBranchComponent, {
      header: `Edit Province for ${id} id`,
      width: '90%',
      height:'60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : deleteData
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
