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
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-province-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditProvinceComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      provinceCode: [this.data[0].provinceCode, Validators.required],
      provinceName: [this.data[0].provinceName, Validators.required],
      provinceAddress: [this.data[0].provinceAddress, Validators.required],
      phoneNo: [this.data[0].phoneNo, Validators.pattern('^[0-9]{10}$')],
      provinceManagerEmailID: [
        this.data[0].provinceManagerEmailID,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      isActive: [this.data[0].isActive, Validators.required],
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
