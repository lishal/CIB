import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import {
  RoleService,
  postRole,
} from 'src/app/Services/Setup/Company/role.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';

@Component({
  selector: 'app-role-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    CustomLoadingModule,
  ],
  providers: [MessageService],
  standalone: true,
})
export class AddRoleComponent implements OnInit {
  myForm!: FormGroup;
  added: boolean = false;

  serverForm: postRole = {
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    createdBy: 'Lishal',
    updatedBy: 'Lishal',
    roleName: '',
    description: '',
    isActive: true,
  };

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private api: RoleService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      NAME: ['', Validators.required],
      DESCRIPTION: ['', Validators.required],
      ACTIVE: [false],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.roleName = this.myForm.value.NAME;
      this.serverForm.description = this.myForm.value.DESCRIPTION;
      this.serverForm.isActive = this.myForm.value.ACTIVE;
      this.loadingService.show();
      this.api.postRoleData(this.serverForm).subscribe(
        (response) => {
          if (response.status === 200) {
            this.added = true;
            this.ref.close(this.added);
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
