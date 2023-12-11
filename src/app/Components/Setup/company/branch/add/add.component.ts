import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogRef ,DialogService,DynamicDialogConfig} from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';


interface District {
  name:String;
  idCluster: String;
  idProvince:String;
  idDistrict:String;
  districtRefCode:String;
}
interface Province {
  name: String;
  id:string;
}



@Component({
  selector: 'app-branch-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CommonModule,
    DropdownModule,
  ],
  providers: [MessageService,DialogService],
  standalone: true,
})
export class AddBranchComponent implements OnInit {
  data:any[]=[];
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  //District List
  districtList: District[] =[];
  district: string | undefined;
  //Province List
  provinceList: Province[] = [];
  province: string | undefined;

  currentProvinceIndex:any=0;

  added: boolean = false;



  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig,
  ) {}

  provinceOnChange(){
    let currentProvince=this.myForm.value.provinceId;
    this.currentProvinceIndex= this.provinceList.findIndex(obj => obj.id === currentProvince);
    this.setDristictList();
  }

  setDristictList(){
    this.districtList=[];
    this.data.map((data)=>{
      
      if(data.idProvince===this.provinceList[this.currentProvinceIndex].id){
        this.districtList.push({"idCluster":data.idCluster,"idProvince":data.idProvince,"idDistrict":data.idDistrict,"name":data.districtName,"districtRefCode":data.districtRefCode})
        
      }
      if(data.idProvince===undefined){
        // console.log(data)
      }
    });
  }
  ngOnInit(): void {
    this.data = this.dialogService.data;
    const provinceName = [...new Set(this.data.map(data =>data.provinceName))]
    const provinceId = [...new Set(this.data.map(data =>data.idProvince))]
    provinceName.forEach((element,index) => {
      if(element!=undefined){
        this.provinceList.push({'id':provinceId[index],'name':element})
        this.provinceList.sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
      } 
    });
    this.setDristictList();
    this.myForm = this.fb.group({
      branchName: ['', Validators.required],
      branchNameNepali: [''],
      dataProviderBranchId: ['', Validators.required],
      previousDataProviderBranchId: [''],
      district: [this.districtList[0].name, Validators.required],
      provinceId: [this.provinceList[0].id, Validators.required],

      branchAddress: ['', Validators.required],
      phoneNo: ['', Validators.pattern('^[0-9]{10}$')],
      branchManagerEmailId: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      performanceCutOff: ['', Validators.required],
      isActive: [false, Validators.required],
      accountMonitoring: [false, Validators.required],
      stockInspection: [false, Validators.required],
      pendingDocument: [false, Validators.required],
      insurance: [false, Validators.required],
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
