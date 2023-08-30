import { Component, OnInit ,OnDestroy } from '@angular/core';
import { DepartmentService } from '../../../../Services/Setup/Company/department.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewDepartmentComponent } from './view/view.component';
import { EditDepartmentComponent } from './edit/edit.component';
import { MessageService } from 'primeng/api';
import { AddDepartmentComponent } from './add/add.component';
import { DeleteDepartmentComponent } from './delete/delete.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DialogService,MessageService]
})
export class DepartmentComponent implements OnInit ,OnDestroy {
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(private api: DepartmentService,public dialogService: DialogService,private messageService: MessageService) {}

  addData() {
    this.ref = this.dialogService.open(AddDepartmentComponent, {
      header: `Add Branch`,
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
    this.ref = this.dialogService.open(ViewDepartmentComponent, {
      header: `Detailed View of ${displayData.account_number} account number`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : displayData
  });

  // this.ref.onClose.subscribe((product: Product) => {
     
  // });

  // this.ref.onMaximize.subscribe((value) => {
      
  // });
  }
  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditDepartmentComponent, {
      header: `Edit department for ${id} id`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : editData
  });
  }
  deleteData(dataProviderBranchId: string) {
    const deleteData = this.data.find((data) => data.dataProviderBranchId === dataProviderBranchId);
    this.ref = this.dialogService.open(DeleteDepartmentComponent, {
      header: `Delete Branch for ${dataProviderBranchId} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
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
  ngOnInit(): void {
    this.isLoading = true;

    this.api.fetchData().subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
        // console.log(this.data)
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
