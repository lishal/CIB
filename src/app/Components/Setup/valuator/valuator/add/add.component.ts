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
  vedobRegNp: any;
  entityDob: Date | undefined;
  sExpiryDate1Np: any;
  sExpiryDate1AD: any="";
  sExpiryDate2Np: any;
  sExpiryDate2AD: any="";
  agmStartDate: Date | undefined;
  agmEndDate: Date | undefined;
  added: boolean = false;
  // valuatorNameError:boolean=false;
  // isIndividualError:boolean=false;
  vedobRegNpError:boolean=false;
  // entityDobError:boolean=false;
  // address1TypeError:boolean=false;
  // municipaltiyError:boolean=false;
  // securityAmount1Error:boolean=false;
  // securityAmount2Error:boolean=false;
  // referenceError:boolean=false;
  // agmStartDateError:boolean=false;
  // agmEndDateError:boolean=false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      valuatorName: ['', Validators.required],
      isIndividual: ['', Validators.required],
      vedobRegNp: [],
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
      sExpiryDate1AD: [],
      sExpiryDate2AD: [],
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
  vedobRegNpFun(npdate:any){
    this.vedobRegNp=npdate;
    
  }
  sExpiryDate1NpFun(npdate:any){
    this.sExpiryDate1Np=npdate
  }
  sExpiryDate1NpToADFun(adDate:any){
    this.sExpiryDate1AD=adDate
  }
  sExpiryDate2NpFun(npdate:any){
    this.sExpiryDate2Np=npdate
  }
  sExpiryDate2NpToADFun(adDate:any){
    this.sExpiryDate2AD=adDate
  }
  onSubmit() {   
    if (this.myForm.valid && this.vedobRegNp!=undefined) {
      const formValues = this.myForm.value;
      this.myForm.value.vedobRegNp=this.vedobRegNp
      this.myForm.value.sExpiryDate1Np=this.sExpiryDate1Np
      this.myForm.value.sExpiryDate1AD=this.sExpiryDate1AD
      this.myForm.value.sExpiryDate2Np=this.sExpiryDate2Np
      this.myForm.value.sExpiryDate2AD=this.sExpiryDate2AD
      this.added = true;
      this.ref.close([formValues, this.added]);
      
    } else {
      // const formValues = this.myForm.value;
      // console.log(formValues )
      // if(formValues.valuatorName===""){
      //   this.valuatorNameError=true;
      // }
      // if(formValues.vedobRegNp===""){
      //   this.vedobRegNpError=true;
      // }
      // if(formValues.isIndividual===""){
      //   this.isIndividualError=true
      // }
      // if(formValues.entityDob===""){
      //   this.entityDobError=true
      // }
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please check all the fields',
      });
    }
    
  }
  // isIndividualOnchange(){
  //   const formValues = this.myForm.value;
  //   if(formValues.isIndividual===""){
  //     this.isIndividualError=true
  //   }
  //   else{
  //     this.isIndividualError=false;
  //   }
    
  // }
  invalidvedobRegNp(){
    const formValues = this.myForm.value;
    if(formValues.vedobRegNp===""){
      this.vedobRegNpError=true
    }
    else{
      this.vedobRegNpError=false;
    }
  }
  onCancel() {
    this.ref.close();
  }
}
