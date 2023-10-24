import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddLookupDropdownHeaderComponent } from './add/add.component';
import { EditLookupDropdownHeaderComponent } from './edit/edit.component';
import { ViewLookupDropdownHeaderComponent } from './view/view.component';
import { DeleteLookupDropdownHeaderComponent } from './delete/delete.component';
import { DropdownHeaderService } from 'src/app/Services/Setup/Lookup-List/dropdown-header.service';

@Component({
  selector: 'app-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.css'],
  providers: [DialogService, MessageService],
})
export class DropdownHeaderComponent implements OnInit {
  constructor(
    public api: DropdownHeaderService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  addData() {
    this.ref = this.dialogService.open(AddLookupDropdownHeaderComponent, {
      header: `Add Dropdown Header`,
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
  editData(headingName: string) {
    const editData = this.data.find((data) => data.headingName === headingName);
    this.ref = this.dialogService.open(EditLookupDropdownHeaderComponent, {
      header: `Edit Dropdown Heading for ${headingName}`,
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
            (data) => data.loginIdentifer === headingName
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
  viewData(headingName: string) {
    const viewData = this.data.find((data) => data.headingName === headingName);
    this.ref = this.dialogService.open(ViewLookupDropdownHeaderComponent, {
      header: `View Dropdown Heading for ${headingName}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: viewData,
    });
  }
  deleteData(headingName: string) {
    const deleteData = this.data.find(
      (data) => data.headingName === headingName
    );
    this.ref = this.dialogService.open(DeleteLookupDropdownHeaderComponent, {
      header: `Delete Dropdown Heading for ${headingName} id`,
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
          (data) => data.vettype === headingName
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
    this.data = [
      {
        headingName: 'heading',
        description: 'description',
        isActive: false,
      },
    ];
  }
}
