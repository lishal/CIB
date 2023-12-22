import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RoleService } from 'src/app/Services/Setup/Company/role.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [DialogService, ConfirmationService],
  imports: [
    ButtonModule,
    ConfirmPopupModule,
    CustomLoadingModule,
    ToastModule,
    CommonModule,
  ],
  standalone: true,
})
export class DeleteRoleComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService,
    private api: RoleService,
    public loadingService: LoadingService,
    private messageService: MessageService
  ) {}
  data: any[] = [];
  ngOnInit() {
    this.data = [this.dialogService.data];
  }
  onDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete?',
      icon: 'fa-solid fa-exclamation-triangle',
      accept: () => {
        this.loadingService.show();
        this.deleteData(this.data[0].id);
      },
      reject: () => {
        this.ref.close('rejected');
      },
    });
  }

  deleteData(id: string) {
    this.api.deleteRoleData(id).subscribe(
      (response) => {
        if (response.status === 200) {
          this.ref.close();
        } else {
          this.handleError('Failed to delete data!');
        }
      },
      (error) => {
        this.handleError('Server error occurred!');
      }
    );
  }

  private handleError(errorMessage: string) {
    this.loadingService.hide();
    this.messageService.add({
      severity: 'error',
      summary: 'Internal Server Error',
      detail: errorMessage,
    });
  }
  onCancel() {
    this.ref.close();
  }
}
