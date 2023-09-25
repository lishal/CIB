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
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-eTemplates-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    EditorModule,
    ChipsModule,
  ],
  providers: [MessageService],
  standalone: true,
})
export class EditETemplatesComponent implements OnInit{
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  updated: boolean = false;
  data: any[] = [];
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}
  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      emailHeader: [this.data[0].emailHeader, Validators.required],
      templateName: [this.data[0].templateName, Validators.required],
      isBodyHtml: [this.data[0].isBodyHtml, Validators.required],
      ccEmail:[this.data[0].ccEmail],
      emailBody:[this.data[0].emailBody,Validators.required],
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
