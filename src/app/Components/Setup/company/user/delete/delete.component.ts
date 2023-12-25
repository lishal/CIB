import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import { UserService } from 'src/app/Services/Setup/Company/user.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-user-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  imports: [
    ButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CustomLoadingModule,
    ConfirmPopupModule,
  ],
  providers: [MessageService, DialogService, ConfirmationService],
  standalone: true,
})
export class DeleteUserComponent implements OnInit {
  data: any;
  branchData: any;
  roleData: any;
  departmentData: any;
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public loadingService: LoadingService,
    private messageService: MessageService,
    private api: UserService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {
    this.branchData = [
      this.dialogService.data[0].find(
        (item: any) => item.id === this.dialogService.data[3].idbranch
      ),
    ];
    this.departmentData = [
      this.dialogService.data[1].find(
        (item: any) => item.id === this.dialogService.data[3].idhrdepartment
      ),
    ];
    this.roleData = [
      this.dialogService.data[2].find(
        (item: any) => item.id === this.dialogService.data[3].idhrrole
      ),
    ];
    this.data = [this.dialogService.data[3]];
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
      // reject: () => {
      //   this.ref.close('rejected');
      // },
    });
  }

  deleteData(id: string) {
    this.api.deleteUserData(id).subscribe(
      (response) => {
        if (response.status === 200) {
          this.ref.close('accepted');
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
