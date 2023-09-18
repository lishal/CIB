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
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-valuatorDocument-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    CalendarModule,
  ],
  providers: [MessageService],
  standalone: true,
})
export class AddValuatorDocumentComponent implements OnInit {
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  receivedOn: Date | undefined;
  expireOn: Date | undefined;
  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      documentName: [''],
      documentType: ['', Validators.required],
      agreement: [''],
      isRecurring: [false, Validators.required],
      receivedOn: ['', Validators.required],
      expireOn: ['', Validators.required],
      comment: [],
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
  onCancel() {
    this.ref.close();
  }
}
