import { Component, OnInit } from '@angular/core';
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
import { NepaliDatepickerModule } from 'nepali-datepicker-angular';

interface Legal {
  name: String;
}
interface CompanyRegNoIA {
  name: String;
}
interface PAN {
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
interface SecurityType1 {
  name: String;
}
interface SecurityType2 {
  name: String;
}
interface GroupName {
  name: String;
}
interface ActionStatus {
  name: String;
}

@Component({
  selector: 'app-valuator-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    CalendarModule,
    NepaliDatepickerModule,

  ],
  providers: [MessageService,],
  standalone: true,
})
export class AddValuatorComponent implements OnInit {
  legalStatusList: Legal[] = [];
  companyRegNoIAList: CompanyRegNoIA[] = [];
  panDistrictList: PAN[] = [];
  address1TypeList: Address1[] = [];
  districtList: District[] = [];
  countryList: Country[] = [];
  securityType1List: SecurityType1[] = [];
  securityType2List: SecurityType2[] = [];
  groupNameList: GroupName[] = [];
  actionStatusList: ActionStatus[] = [];
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  vedobRegNp: Date | undefined;
  entityDob: Date | undefined;
  sExpiryDate1Np: Date | undefined;
  sExpiryDate1: Date | undefined;
  sExpiryDate2Np: Date | undefined;
  sExpiryDate2: Date | undefined;
  agmStartDate: Date | undefined;
  agmEndDate: Date | undefined;
  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      valuatorName: ['', Validators.required],
      isIndividual: ['', Validators.required],
      vedobRegNp: [''],
      entityDob: ['', Validators.required],
      legalStatus: [''],
      companyRegNo: [''],
      companyRegNoIA: [''],
      pan: [''],
      panDistrict: [''],
      address1Type: ['Address1', Validators.required],
      municipaltiy: ['', Validators.required],
      ward: [],
      addressDetail: [],
      district: ['Disctrict', Validators.required],
      poBox: [],
      country: ['Country', Validators.required],
      contactPerson: [],
      telephoneNo1: ['', [Validators.pattern('^[0-9]*$')]],
      telephoneNo2: ['', [Validators.pattern('^[0-9]*$')]],
      fax1: [],
      fax2: [],
      mobileNo: ['', Validators.pattern('^[0-9]{10}$')],
      mainEmail: [
        'Test@gmail.com',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}')],
      ],
      altEmail: [
        'Test@gmail.com',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}')],
      ],
      securityType1: [],
      securityType2: [],
      securityAmount1: [
        '0',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      securityAmount2: [
        '0',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      sExpiryDate1Np: [],
      sExpiryDate2Np: [],
      sExpiryDate1: [],
      sExpiryDate2: [],
      reference: ['', Validators.required],
      agmStartDate: ['', Validators.required],
      agmEndDate: ['', Validators.required],
      groupName: [],
      isActive: [false],
      citzDoc: [],
      actionStatus: [],
      comment: [],
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      console.log(formValues.vedobRegNp);
      // this.added = true;
      // this.ref.close([formValues, this.added]);
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
