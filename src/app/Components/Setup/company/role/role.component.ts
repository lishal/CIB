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


  showData(roleName: string) {
    const displayData = this.data.find((data) => data.roleName === roleName);
    this.ref = this.dialogService.open(ViewRoleComponent, {
      header: `Detailed View of ${displayData.roleName}`,
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
  editData(roleName: string) {
    const editData = this.data.find((data) => data.roleName === roleName);
    this.ref = this.dialogService.open(EditRoleComponent, {
      header: `Edit role for ${roleName} id`,
      width: '80%',
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
            (data) => data.roleName === roleName
          );
          this.data[index].roleName = datas[0].roleName;
          this.data[index].description = datas[0].description;
          this.data[index].systemDefined = datas[0].systemDefined;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(roleName: string) {
    const deleteData = this.data.find((data) => data.roleName === roleName);
    this.ref = this.dialogService.open(DeleteRoleComponent, {
      header: `Delete Branch for ${roleName}`,
      width: '80%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex(
          (data) => data.dataProviderBranchId === roleName
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
