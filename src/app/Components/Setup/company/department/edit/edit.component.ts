import { Component, OnInit, forwardRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  NG_VALUE_ACCESSOR,
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
    SelectButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  updated: boolean = false;

  //parentIdentifer List
  parentIdentiferList: parentIdentifer[] = [];
  parentIdentifer: string | undefined;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      deptName: [this.data[0].deptName, Validators.required],
      shortName: [this.data[0].shortName, Validators.required],
      parentIdentifer: [this.data[0].parentIdentifer],
      deptAddress: [this.data[0].deptAddress, Validators.required],
      phoneNo: [
        this.data[0].phoneNo,
        [Validators.pattern('^[0-9]{10}$'), Validators.required],
      ],
      psegHead: [this.data[0].psegHead],
      ssegHead: [this.data[0].ssegHead],
      faxno: [this.data[0].faxno],
      establishedDate: [this.data[0].establishedDate, Validators.required],
      depemail: [
        this.data[0].depemail,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      emailtopsh: [this.data[0].emailtopsh, Validators.required],
      emailtossh: [this.data[0].emailtossh, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],
      deptfun: [this.data[0].deptfun, Validators.required],
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
  onCancle() {
    this.ref.close();
  }
}
