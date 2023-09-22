import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-lookupIffVersion-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [DialogService, ConfirmationService],
  imports: [ButtonModule, ConfirmPopupModule],
  standalone: true,
})
export class DeleteLookupIffVersionComponent implements OnInit{
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef, private confirmationService: ConfirmationService) {}
  data: any[] = [];
  ngOnInit() {
      this.data=[this.dialogService.data];
  }
  onDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete?',
      icon: 'fa-solid fa-exclamation-triangle',
      accept: () => {
        this.ref.close('accepted');
      },
      reject: () => {
        this.ref.close('rejected');
      },
    });
  }
  onCancel() {
    this.ref.close();
  }
}
