import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
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
  selector: 'app-department-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [MessageService],
  standalone: true,
})
export class AddDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'True', value: true },
    { label: 'False', value: false },
  ];
  //parentIdentifer List
  parentIdentiferList: parentIdentifer[] = [];
  parentIdentifer: string | undefined;

  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      deptName: ['', Validators.required],
      shortName: ['', Validators.required],
      parentIdentifer: [''],
      deptAddress: ['', Validators.required],
      phoneNo: ['', [Validators.pattern('^[0-9]{10}$'), Validators.required]],
      psegHead: [''],
      ssegHead: [''],
      faxno: [''],
      establishedDate: ['', Validators.required],
      depemail: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      emailtopsh: [false, Validators.required],
      emailtossh: [false, Validators.required],
      isActive: [false, Validators.required],
      deptfun: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      this.added = true;
      this.ref.close([formValues, this.added]);
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
