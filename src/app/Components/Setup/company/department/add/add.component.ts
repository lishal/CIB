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

interface District {
  name: String;
}
interface Province {
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
    CalendarModule
  ],
  providers: [MessageService],
  standalone: true,
})
export class AddDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  //parentIdentifer List
  parentIdentiferList: District[] = [
    
  ];
  parentIdentifer: string | undefined;
  //Province List
  provinceList: Province[] = [{ name: 'Karnali' }, { name: 'Bagmati' }];
  province: string | undefined;

  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      deptName: ['', Validators.required],
      deptNameNepali: [''],
      shortName: ['', Validators.required],
      deptAddress: ['',Validators.required],
      phoneNo: ['', Validators.pattern('^[0-9]{10}$')],
      parentIdentifer: ['', Validators.required],
      psegHead: [''],
      ssegHead:[''],
      faxno:[''],
      date:['',Validators.required],
      branchAddress: ['', Validators.required],
      branchManagerEmailId: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      performanceCutOff: ['', Validators.required],
      isActive: [false, Validators.required],
      accountMonitoring: [false, Validators.required],
      stockInspection: [false, Validators.required],
      pendingDocument: [false, Validators.required],
      insurance: [false, Validators.required],
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
