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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { SelectButtonModule } from 'primeng/selectbutton';

interface Status {
  name: String;
}

@Component({
  selector: 'app-popup-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
    EditorModule,
    SelectButtonModule
  ],
  providers: [MessageService],
  standalone: true,
})
export class EditPopupComponent implements OnInit{
  myForm!: FormGroup;
  updated: boolean = false;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];

  statusList: Status[] = [];
  showupto: Date | undefined;
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
      subject: ['Subject', Validators.required],
      attachment:[],
      isActive:[false],
      status: ['Published',Validators.required],
      showupto: ['', Validators.required],
      description:['Description',Validators.required],
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
