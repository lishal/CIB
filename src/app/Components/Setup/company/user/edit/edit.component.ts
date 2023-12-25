import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import {
  UserService,
  postUser,
} from 'src/app/Services/Setup/Company/user.service';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CustomLoadingModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditUserComponent implements OnInit {
  data: any;
  myForm!: FormGroup;
  branchData: any;
  roleData: any;
  departmentData: any;
  updated: boolean = false;
  serverForm: postUser = {
    createdOn: '',
    updatedOn: new Date().toISOString(),
    createdBy: '',
    updatedBy: 'Lishal',
    loginId: '',
    staffCode: '',
    fullName: '',
    emailId: '',
    idhrrole: '',
    idbranch: '',
    idhrdepartment: '',
    accessByBranch: false,
    isNewlyAdded: false,
    mobileNo: '',
    enableChangeType: false,
    allowClusterBranch: false,
    allowProvinceBranch: false,
    passwordExpiryPeriod: 0,
    isActive: true,
    password: 'test1',
  };
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public loadingService: LoadingService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private api: UserService
  ) {}
  ngOnInit(): void {
    this.data = this.dialogService.data;
    this.branchData = this.data[0];
    this.departmentData = this.data[1];
    this.roleData = this.data[2];
    this.data = this.data[3];
    this.myForm = this.fb.group({
      loginId: [this.data.loginId, Validators.required],
      fullName: [this.data.fullName, Validators.required],
      staffCode: [this.data.staffCode, Validators.required],
      idbranch: [this.data.idbranch, Validators.required],
      accessByBranch: [this.data.accessByBranch],
      idhrdepartment: [this.data.idhrdepartment, Validators.required],
      idhrrole: [this.data.idhrrole, Validators.required],
      allowClusterBranch: [this.data.allowClusterBranch],
      allowProvinceBranch: [this.data.allowProvinceBranch],
      mobileNo: [
        this.data.mobileNo,
        [Validators.required, Validators.pattern(/^[+]?\d{0,19}$/)],
      ],
      emailId: [
        this.data.emailId,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      passwordExpiryPeriod: [
        this.data.passwordExpiryPeriod,
        Validators.pattern(/^(-?\d+)?$/),
      ],
      enableChangeType: [this.data.enableChangeType],
      isNewlyAdded: [this.data.isNewlyAdded],
      isActive: [this.data.isActive],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.loginId = this.myForm.value.loginId;
      this.serverForm.staffCode = this.myForm.value.staffCode;
      this.serverForm.fullName = this.myForm.value.fullName;
      this.serverForm.emailId = this.myForm.value.emailId;
      this.serverForm.idhrrole = this.myForm.value.idhrrole;
      this.serverForm.idbranch = this.myForm.value.idbranch;
      this.serverForm.idhrdepartment = this.myForm.value.idhrdepartment;
      this.serverForm.accessByBranch = this.myForm.value.accessByBranch;
      this.serverForm.isNewlyAdded = this.myForm.value.isNewlyAdded;
      this.serverForm.mobileNo = this.myForm.value.mobileNo;
      this.serverForm.enableChangeType = this.myForm.value.enableChangeType;
      this.serverForm.allowClusterBranch = this.myForm.value.allowClusterBranch;
      this.serverForm.allowProvinceBranch =
        this.myForm.value.allowProvinceBranch;
      this.serverForm.passwordExpiryPeriod =
        this.myForm.value.passwordExpiryPeriod;
      this.serverForm.isActive = this.myForm.value.isActive;
      this.serverForm.createdBy = this.data.createdBy;
      this.serverForm.createdOn = this.data.createdOn;
      this.loadingService.show();
      this.api.editUserData(this.serverForm, this.data.id).subscribe(
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
