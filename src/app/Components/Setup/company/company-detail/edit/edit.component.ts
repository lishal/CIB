import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService, MessageService],
  imports: [
    SelectButtonModule,
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
  ],

  standalone: true,
})
export class EditComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  selectedImageUrl: string | ArrayBuffer | null = null;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  updated: boolean = false;
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}
  handleImage(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      companyName: [this.data[0].companyName, Validators.required],
      abbreveration: [this.data[0].abbreveration, Validators.required],
      repaymentFrq: [this.data[0].repaymentFrq, Validators.required],
      dataProviderId: [
        this.data[0].dataProviderId,
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      prevDataProviderId: [
        this.data[0].prevDataProviderId,
        [Validators.pattern(/^[0-9]*$/)],
      ],
      tradingSymbol: [this.data[0].tradingSymbol],
      secretKey: [{ value: this.data[0].secretKey, disabled: true }],
      installmentAmt: [this.data[0].installmentAmt],
      installmentOverdue: [this.data[0].installmentOverdue],
      installmentNumber: [this.data[0].installmentNumber],
      disbursedAmtDate: [this.data[0].disbursedAmtDate],
      highestCreditUsage: [this.data[0].highestCreditUsage],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      this.data.push(formValues);
      this.updated = true;
      this.ref.close([this.data, this.updated]); // This will close the dialog and return the data to the parent component
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
  // selectProduct(product: Product) {
  //     this.ref.close(product);
  // }
}
