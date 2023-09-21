import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { DynamicDialogRef,
  DialogService,
  DynamicDialogConfig, } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lookupDropdownHeader-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
  ],
  providers: [MessageService,DialogService],
  standalone: true,
})
export class EditLookupDropdownHeaderComponent implements OnInit{
  updated: boolean = false;
  data: any[] = [];
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  public np: any;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}
  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      headingName: [this.data[0].headingName, Validators.required],
      groupCode: [this.data[0].groupCode, Validators.required],
      description: [this.data[0].description, Validators.required],
      isSystemDefined: [this.data[0].isSystemDefined, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],
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
