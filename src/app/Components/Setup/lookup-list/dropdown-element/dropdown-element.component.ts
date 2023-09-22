import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditLookupDropdownElementComponent } from './edit/edit.component';
import { ViewLookupDropdownElementComponent } from './view/view.component';
import { DeleteLookupDropdownElementComponent } from './delete/delete.component';
import { AddLookupDropdownElementComponent } from './add/add.component';
@Component({
  selector: 'app-dropdown-element',
  templateUrl: './dropdown-element.component.html',
  styleUrls: ['./dropdown-element.component.css'],
  providers: [DialogService, MessageService],
})
export class DropdownElementComponent implements OnInit {
  constructor(
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  addData() {
    this.ref = this.dialogService.open(AddLookupDropdownElementComponent, {
      header: `Add Dropdown Element`,
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
    this.ref = this.dialogService.open(EditLookupDropdownElementComponent, {
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
    this.ref = this.dialogService.open(ViewLookupDropdownElementComponent, {
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
    this.ref = this.dialogService.open(DeleteLookupDropdownElementComponent, {
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
        headingName:'Test',
        elementHeading: 'Test',
        catalogueCode: 'Test',
        description: 'Test',
        isActive: false,
      },
    ];
  }
}
