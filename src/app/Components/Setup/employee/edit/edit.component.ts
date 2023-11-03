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
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

interface Department {
  name: String;
}
interface Branch {
  name: String;
}
interface Role {
  name: String;
}
interface Module {
  name: String;
}

@Component({
  selector: 'app-employee-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditEmployeeComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  updated: boolean = false;

  //parentIdentifer List
  DepartmentList:Department[]=[];
  BranchList:Branch[]=[];
  RoleList:Role[]=[];
  ModuleList:Module[]=[];

  department: string | undefined;
  branch: string | undefined;
  role: string | undefined;
  module: string | undefined;


  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      loginIdentifer: [this.data[0].loginIdentifer, Validators.required],
      fullname: [this.data[0].fullname,Validators.required],
      staffCode: [this.data[0].staffCode, Validators.required],
      department: [this.data[0].department, Validators.required],
      defaultBranch: [this.data[0].defaultBranch, Validators.required],
      emailAddress: [
        this.data[0].emailAddress,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      roleName: [this.data[0].roleName, Validators.required],
      markerRight: [this.data[0].markerRight, Validators.required],
      restrictAccessByBranch: [this.data[0].restrictAccessByBranch, Validators.required],
      defaultModule: [this.data[0].defaultModule, Validators.required],
      enableChangeType: [this.data[0].enableChangeType, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],

      passwordExpiryPeriod: [this.data[0].passwordExpiryPeriod, [Validators.required,Validators.pattern('^[0-9]*$')]],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      this.updated = true;
      this.ref.close([formValues, this.updated]);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please check all the fields',
      });
    }
  }
  onCancel() {
    this.ref.close();
  }
}
