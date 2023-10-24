import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddSTemplatesComponent } from './add/add.component';
import { EditSTemplatesComponent } from './edit/edit.component';
import { DeleteSTemplatesComponent } from './delete/delete.component';
import { SmsTemplateService } from 'src/app/Services/Setup/sms-template.service';
@Component({
  selector: 'app-sms-templates',
  templateUrl: './sms-templates.component.html',
  styleUrls: ['./sms-templates.component.css'],
  providers: [DialogService, MessageService],
})
export class SmsTemplatesComponent implements OnInit{
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: SmsTemplateService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.data = [
      {
        templateName: 'templateName',
        smsnumber: '1',
        sms: 'test',
      },
    ];
  }
  addData() {
    this.ref = this.dialogService.open(AddSTemplatesComponent, {
      header: `Add SMS Templates`,
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
    this.ref = this.dialogService.open(EditSTemplatesComponent, {
      header: `Edit SMS Template of ${templateName} `,
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
    this.ref = this.dialogService.open(DeleteSTemplatesComponent, {
      header: `Delete SMS Template for ${templateName} id`,
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
