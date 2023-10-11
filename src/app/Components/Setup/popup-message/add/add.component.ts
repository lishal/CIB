import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';

interface Status {
  name: String;
}

@Component({
  selector: 'app-popup-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    SelectButtonModule,
    DropdownModule,
    CalendarModule,
    EditorModule
  ],
  providers: [MessageService],
  standalone: true,
})

export class AddPopupComponent implements OnInit {
  myForm!: FormGroup;

  added: boolean = false;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];

  statusList: Status[] = [];
  showupto: Date | undefined;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    
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
