import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import { LoadingService } from 'src/app/Services/loading.service';
import {
  RoleService,
  postRole,
} from 'src/app/Services/Setup/Company/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    CustomLoadingModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditRoleComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  updated: boolean = false;

  serverForm: postRole = {
    createdOn: '',
    updatedOn: new Date().toISOString(),
    createdBy: '',
    updatedBy: 'Lishal1',
    roleName: '',
    description: '',
    isActive: true,
  };
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig,
    public loadingService: LoadingService,
    private api: RoleService
  ) {}

  ngOnInit() {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      id: [this.data[0].id],
      roleName: [this.data[0].roleName, Validators.required],
      description: [this.data[0].description, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.createdBy = this.data[0].createdBy;
      this.serverForm.createdOn = this.data[0].createdOn;
      this.serverForm.description = this.myForm.value.description;
      this.serverForm.roleName = this.myForm.value.roleName;
      this.serverForm.isActive = this.myForm.value.isActive;
      this.loadingService.show();
      this.api.editRoleData(this.serverForm, this.data[0].id).subscribe(
        (response) => {
          if (response.status === 200) {
            this.updated = true;
            this.ref.close(this.updated);
          } else {
            this.handleError('Failed to add data!');
          }
        },
        (error) => {
          this.handleError('Server error occurred!');
        }
      );
    } else {
      this.handleError('Please check all the fields!');
    }
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
