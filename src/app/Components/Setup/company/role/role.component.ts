import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoleService } from '../../../../Services/Setup/Company/role.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditRoleComponent } from './edit/edit.component';
import { ViewRoleComponent } from './view/view.component';
import { AddRoleComponent } from './add/add.component';
import { MessageService } from 'primeng/api';
import { DeleteRoleComponent } from './delete/delete.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [DialogService,MessageService],
})
export class RoleComponent implements OnInit, OnDestroy {
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(private api: RoleService, public dialogService: DialogService,private messageService: MessageService) {}

  addData() {
    this.ref = this.dialogService.open(AddRoleComponent, {
      header: `Add Role`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
    this.ref.onClose.subscribe((innerData: any) => {
      if (innerData !== undefined) {
        if (innerData[1] === true) {
          this.isLoading = true;
          this.api.addRoleData(innerData[0]).subscribe(
            () => {
              this.data=[...this.data,innerData[0]];
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Data added successfully',
              });
              this.isLoading = false;
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Something went wrong',
              });
              this.isLoading = false;
            }
          );
        }
      }
    });
  }


  showData(Id: string) {
    const displayData = this.data.find((data) => data.Id === Id);
    this.ref = this.dialogService.open(ViewRoleComponent, {
      header: `Detailed View of ${displayData.NAME}`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: displayData,
    });

    // this.ref.onClose.subscribe((product: Product) => {

    // });

    // this.ref.onMaximize.subscribe((value) => {

    // });
  }
  editData(Id: string) {
    const editData = this.data.find((data) => data.Id === Id);
    this.ref = this.dialogService.open(EditRoleComponent, {
      header: `Edit role for ${editData.NAME} id`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((innerData: any) => {
      if (innerData !== undefined) {
        if (innerData[1] === true) {
            
          this.isLoading = true;
          // console.log(innerData[0])
          this.api.updateRoleData(innerData[0]).subscribe(
            (response) => {
              console.log(response)
              const index = this.data.findIndex(
                (data) => data.Id === Id
              );
              this.data[index].NAME = innerData[0].NAME;
              this.data[index].DESCRIPTION = innerData[0].DESCRIPTION;
              this.data[index].ACTIVE = innerData[0].ACTIVE;
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Data Updated successfully',
              });
              this.isLoading = false;
            },
            (error) => {
              console.log(error)
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Something went wrong',
              });
              this.isLoading = false;
            }
          );
        }
      }
    });
  }
  deleteData(Id: string) {
    const deleteData = this.data.find((data) => data.Id === Id);
    this.ref = this.dialogService.open(DeleteRoleComponent, {
      header: `Delete Branch for ${deleteData.NAME}`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((innerData: any) => {
      if (innerData === 'accepted') {
        const index = this.data.findIndex(
          (data) => data.Id === Id
        );
        this.isLoading = true;
          this.api.deleteRoleData(this.data[index]).subscribe(
            (response) => {
              
              this.data.splice(index, 1);
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Data deleted successfully',
              });
              this.isLoading = false;
            },
            (error) => {
              console.log(error)
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Something went wrong',
              });
              this.isLoading = false;
            }
          );
      } else if (innerData === 'rejected') {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      }
    });
  }
  ngOnInit(): void {
    // this.data=[{'NAME':'TEST', 'DESCRIPTION':'DESC'},{'NAME':'TEST', 'DESCRIPTION':'DESC'},{'NAME':'TEST', 'DESCRIPTION':'DESC'}]
    this.isLoading = true;

    
    this.api.getRoleData().subscribe(
      (response) => {
        this.data = response.value;
        this.isLoading = false;
        // console.log(this.data);
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
