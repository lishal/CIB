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
  selector: 'app-user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
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
export class AddUserComponent implements OnInit {
  data: any;
  myForm!: FormGroup;
  branchData: any;
  roleData: any;
  departmentData: any;
  added: boolean = false;
  serverForm: postUser = {
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    createdBy: 'Lishal',
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
    this.myForm = this.fb.group({
      loginId: ['', Validators.required],
      fullName: ['', Validators.required],
      staffCode: ['', Validators.required],
      idbranch: ['', Validators.required],
      accessByBranch: [false],
      idhrdepartment: ['', Validators.required],
      idhrrole: ['', Validators.required],
      allowClusterBranch: [false],
      allowProvinceBranch: [false],
      mobileNo: [
        '',
        [Validators.required, Validators.pattern(/^[+]?\d{0,19}$/)],
      ],
      emailId: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      passwordExpiryPeriod: ['', Validators.pattern(/^(-?\d+)?$/)],
      enableChangeType: [false],
      isNewlyAdded: [false],
      isActive: [false],
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
      this.loadingService.show();
      this.api.postUserData(this.serverForm).subscribe(
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
