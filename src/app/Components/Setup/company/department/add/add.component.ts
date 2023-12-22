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
import { CalendarModule } from 'primeng/calendar';
import { CustomLoadingModule } from 'src/app/Components/custom-loading/custom-loading.module';
import {
  DepartmentService,
  postDepartment,
} from 'src/app/Services/Setup/Company/department.service';
import { LoadingService } from 'src/app/Services/loading.service';

interface parentIdentifer {
  name: String;
}

@Component({
  selector: 'app-department-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    CalendarModule,
    CustomLoadingModule,
  ],
  providers: [MessageService],
  standalone: true,
})
export class AddDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  doe: Date | undefined;
  added: boolean = false;
  serverForm: postDepartment = {
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
    createdBy: 'Lishal',
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
    private api: DepartmentService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      departmentName: ['', Validators.required],
      abbr: ['', Validators.required],
      departmentAddress: ['', Validators.required],
      phoneNo: ['', Validators.pattern(/^[+]?\d{0,19}$/)],
      emailId: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      faxNo: [''],
      doe: ['', Validators.required],
      isActive: [false],
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
      this.loadingService.show();
      this.api.postDepartmentData(this.serverForm).subscribe(
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
