import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeletePopupComponent } from './delete/delete.component';
import { EditPopupComponent } from './edit/edit.component';
import { AddPopupComponent } from './add/add.component';
import { PopupMessageService } from 'src/app/Services/Setup/popup-message.service';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css'],
  providers: [DialogService, MessageService],
})
export class PopupMessageComponent implements OnInit{
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: PopupMessageService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.data = [
      {
        subject: 'Subject',
        isActive: true,
        status: 'Published',
        showupto: '4/7/2023',
      },
    ];
  }
  addData() {
    this.ref = this.dialogService.open(AddPopupComponent, {
      header: `Add Popup Message`,
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
  editData(subject: string) {
    const editData = this.data.find(
      (data) => data.subject === subject
    );
    this.ref = this.dialogService.open(EditPopupComponent, {
      header: `Edit Popup Message of ${subject} `,
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
            (data) => data.templateName === subject
          );
          // this.data[index].branchName = datas[0].branchName;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  deleteData(subject: string) {
    const deleteData = this.data.find((data) => data.subject === subject);
    this.ref = this.dialogService.open(DeletePopupComponent, {
      header: `Delete Popup Message for ${subject} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.subject === subject);
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
}
