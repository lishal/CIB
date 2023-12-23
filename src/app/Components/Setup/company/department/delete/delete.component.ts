import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/Setup/Company/department.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-department-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [DialogService, ConfirmationService],
  imports: [
    ButtonModule,
    ConfirmPopupModule,
    CalendarModule,
    FormsModule,
    CustomLoadingModule,
    ToastModule,
    CommonModule,
  ],
  standalone: true,
})
export class DeleteDepartmentComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService,
    private api: DepartmentService,
    public loadingService: LoadingService,
    private messageService: MessageService
  ) {}
  data: any[] = [];
  doe: Date | undefined;
  ngOnInit() {
    this.data = [this.dialogService.data];
    this.doe = new Date(this.data[0].doe);
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
    this.api.deleteDepartmentData(id).subscribe(
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
