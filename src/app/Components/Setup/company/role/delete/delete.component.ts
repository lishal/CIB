import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-role-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [DialogService,ConfirmationService],
  imports:[ButtonModule,ConfirmPopupModule],
  standalone:true
})
export class DeleteRoleComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService
  ) {}
  data: any[] = [];
  ngOnInit() {
    this.data = [this.dialogService.data];
    console.log(this.data)
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