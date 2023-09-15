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


@Component({
  selector: 'app-valuator-add',
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
export class AddValuatorComponent implements OnInit {

  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  added: boolean = false;
  vedobRegNp: Date | undefined;
  entityDob:Date | undefined;
  public np:any;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
  ) {}
    
  ngOnInit(): void {
   
    this.myForm = this.fb.group({
      valuatorName: ['', Validators.required],
      isIndividual: ['', Validators.required],
      vedobRegNp: ['', Validators.required],
      entityDob: ['', Validators.required],
    });
  }

}
