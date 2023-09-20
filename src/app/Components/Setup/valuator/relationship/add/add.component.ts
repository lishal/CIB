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
import { DropdownModule } from 'primeng/dropdown';

interface Type {
  name: String;
}
interface natureOfRelationship {
  name: String;
}
interface PAN {
  name: String;
}
interface Gender {
  name: String;
}
interface CitzIssuedDistrict {
  name: String;
}
interface VoterIDIssuedDistrict {
  name: String;
}
interface Address1 {
  name: String;
}
interface District {
  name: String;
}
interface Country {
  name: String;
}
interface GroupName {
  name: String;
}
interface ActionStatus {
  name: String;
}

@Component({
  selector: 'app-vrelationship-add',
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
export class AddVRelationshipComponent implements OnInit {
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'True', value: true },
    { label: 'False', value: false },
  ];
  added: boolean = false;
  relationshipTypeList: Type[] = [];
  natureOfRelationshipList: natureOfRelationship[] = [];
  panDistrictList: PAN[] = [];
  genderList: Gender[] = [];
  citzIssuedDistrictList: CitzIssuedDistrict[] = [];
  voterIdIssuedDistrictList: VoterIDIssuedDistrict[] = [];
  address1TypeList: Address1[] = [];
  districtList: District[] = [];
  countryList: Country[] = [];
  groupNameList: GroupName[] = [];
  actionStatusList: ActionStatus[] = [];

  dob: Date | undefined;
  vrdobregNp: Date | undefined;
  panIssuedDateNp: Date | undefined;
  panIssuedDate: Date | undefined;
  citizenshipIssuedDateNp: Date | undefined;
  citizenshipIssuedDate: Date | undefined;
  voterIssuedDateNp: Date | undefined; 
  voterIssuedDate: Date | undefined; 
  passportExpiryDate: Date | undefined; 
  indianEmbassyRegNoDate: Date | undefined; 
  dateOfLeaving: Date | undefined; 

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      valuatorRelationshipName: ['', Validators.required],
      relationshipType: ['', Validators.required],
      natureOfRelationship: ['', Validators.required],
      percentageOfControl: [''],
      vrdobregNp: ['', Validators.required],
      dob: ['', Validators.required],
      pan: [''],
      panDistrict: [''],
      panIssuedDateNp: [''],
      panIssuedDate: [''],
      gender: ['', Validators.required],
      citizenshipNo: [''],
      citzIssuedDistrict: [''],
      citizenshipIssuedDateNp: [''],
      citizenshipIssuedDate: [''],
      voterId: [''],
      voterIdIssuedDistrict: [''],
      voterIssuedDateNp: [''],
      voterIssuedDate: [''],
      passport: [''],
      passportExpiryDate: [''],
      indianEmbassyRegNo: [''],
      indianEmbassyRegNoDate: [''],
      fatherName: [''],
      grandFatherName: [''],
      spouse1: [''],
      spouse2: [''],
      motherName: [''],
      address1Type: ['Address1', Validators.required],
      municipaltiy: ['', Validators.required],
      ward: [],
      addressDetail: [],
      district: ['Disctrict', Validators.required],
      poBox: [],
      country: ['Country', Validators.required],
      telephoneNo1: ['', Validators.pattern('^[0-9]*$')],
      telephoneNo2: ['', Validators.pattern('^[0-9]*$')],
      fax1: [''],
      fax2: [''],
      mobileNo:['',Validators.pattern('^[0-9]{10}$')],
      email: [
        'Test@gmail.com',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}')],
      ],
      altEmail: [
        'Test@gmail.com',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}')],
      ],
      dateOfLeaving:[],
      groupName:[],
      selectFile:[],
      isActive:[true,Validators.required],
      actionStatus:[],
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
