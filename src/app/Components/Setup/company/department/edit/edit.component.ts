import { Component, OnInit, forwardRef } from '@angular/core';
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
import { CalendarModule } from 'primeng/calendar';
import { LoadingService } from 'src/app/Services/loading.service';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import {
  DepartmentService,
  postDepartment,
} from 'src/app/Services/Setup/Company/department.service';

interface parentIdentifer {
  name: String;
}

@Component({
  selector: 'app-department-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    CalendarModule,
    CustomLoadingModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  updated: boolean = false;
  serverForm: postDepartment = {
    createdOn: '',
    updatedOn: new Date().toISOString(),
    createdBy: '',
    updatedBy: 'Lishal',
    departmentName: '',
    departmentAddress: '',
    doe: '',
    faxNo: '',
    phoneNo: '',
    emailId: '',
    abbr: '',
    isActive: true,
  };
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig,
    public loadingService: LoadingService,
    private api: DepartmentService
  ) {}

  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      departmentName: [this.data[0].departmentName, Validators.required],
      abbr: [this.data[0].abbr, Validators.required],
      departmentAddress: [this.data[0].departmentAddress, Validators.required],
      phoneNo: [this.data[0].phoneNo, Validators.pattern(/^[+]?\d{0,19}$/)],
      emailId: [
        this.data[0].emailId,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      faxNo: [this.data[0].faxNo],
      doe: [new Date(this.data[0].doe), Validators.required],
      isActive: [this.data[0].isActive],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.departmentName = this.myForm.value.departmentName;
      this.serverForm.abbr = this.myForm.value.abbr;
      this.serverForm.departmentAddress = this.myForm.value.departmentAddress;
      this.serverForm.phoneNo = this.myForm.value.phoneNo;
      this.serverForm.emailId = this.myForm.value.emailId;
      this.serverForm.faxNo = this.myForm.value.faxNo;
      this.serverForm.doe = this.myForm.value.doe.toISOString();
      this.serverForm.isActive = this.myForm.value.isActive;
      this.serverForm.createdOn = this.myForm.value.createdOn;
      this.serverForm.createdBy = this.myForm.value.createdBy;
      this.loadingService.show();
      this.api.editDepartmentData(this.serverForm, this.data[0].id).subscribe(
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
