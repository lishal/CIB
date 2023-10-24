import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddETemplatesComponent } from './add/add.component';
import { EditETemplatesComponent } from './edit/edit.component';
import { DeleteETemplatesComponent } from './delete/delete.component';
import { EmailTemplateService } from 'src/app/Services/Setup/email-template.service';

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.css'],
  providers: [DialogService, MessageService],
})
export class EmailTemplatesComponent implements OnInit {

  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: EmailTemplateService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.data = [
      {
        templateName: 'templateName',
        emailHeader: 'emailHeader',
      },
    ];
  }
  addData() {
    this.ref = this.dialogService.open(AddETemplatesComponent, {
      header: `Add HR Email Templates`,
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
  editData(templateName: string) {
    const editData = this.data.find(
      (data) => data.templateName === templateName
    );
    this.ref = this.dialogService.open(EditETemplatesComponent, {
      header: `Edit Email Templates of ${templateName} `,
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
            (data) => data.templateName === templateName
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
  deleteData(templateName: string) {
    const deleteData = this.data.find((data) => data.templateName === templateName);
    this.ref = this.dialogService.open(DeleteETemplatesComponent, {
      header: `DeleteEmail Templates for ${templateName} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.templateName === templateName);
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