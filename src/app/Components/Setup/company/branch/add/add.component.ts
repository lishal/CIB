import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogRef ,DialogService,DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { BranchService, postBranch } from 'src/app/Services/Setup/Company/branch.service';


interface Dropdown{
  id:string;
  name:string
}

@Component({
  selector: 'app-branch-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
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
  loading:boolean=false;
  cluster: Dropdown[] | undefined;
  province: Dropdown[] | undefined;
  district: Dropdown[] | undefined;

  added: boolean = false;

  serverForm:postBranch={
    "createdOn": new Date().toISOString(),
    "updatedOn": new Date().toISOString(),
    "createdBy": "Lishal",
    "updatedBy": "Lishal",
    "dpbranchid": "",
    "prevdpbranchid": "",
    "branchName": "",
    "branchAddress": "",
    "phoneNo": "",
    "branchNameNp": "",
    "bmemailId": "",
    "idDistrict": "",
    "performanceCutOff": 0,
    "enableKsklinquiryViaAccountMonitoring": true,
    "enableKsklinquiryViaStockInspection": true,
    "enableKsklinquiryViaPendingDocument": true,
    "enableKsklinquiryViaInsurance": true,
    "isActive": true
  }

   constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig,
    private api:BranchService,
  ) {}
  
  clusterOnChange(){
    this.province=this.getUniqueProvinces(this.myForm.value.selectedCluster).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
    if(this.myForm.value.selectedCluster===null){
    this.district=[]  
  }
  }

  provinceOnChange(){
    this.district=this.getUniqueDistrict(this.myForm.value.selectedCluster,this.myForm.value.selectedProvince).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
  }

  private getUniqueClusters() {
    const uniqueClusterIds = new Set<string>();
    const uniqueClusters: { id: string, name: string }[] = [];

    this.data.forEach(cluster => {
      if (!uniqueClusterIds.has(cluster.idCluster)) {
        uniqueClusterIds.add(cluster.idCluster);
        uniqueClusters.push({ id: cluster.idCluster, name: cluster.clusterName });
      }
    });
    return uniqueClusters
  }
  private getUniqueProvinces(clusterid:string) {
    const uniqueProvinceIds = new Set<string>();
    const uniqueProvince: { id: string, name: string }[] = [];
    const selectedProvinceData = this.data.filter(data => data.idCluster === clusterid);
    selectedProvinceData.forEach(data =>  {
      if (!uniqueProvinceIds.has(data.idProvince)) {
        uniqueProvinceIds.add(data.idProvince);
        uniqueProvince.push({ id: data.idProvince, name: data.provinceName });
      }
    });
    return uniqueProvince
  }
  private getUniqueDistrict(clusterid:string,provinceid:string) {
    const uniqueDistrictId = new Set<string>();
    const uniqueDistrict: { id: string, name: string }[] = [];
    const selectedDistrictData = this.data.filter(data => data.idCluster === clusterid && data.idProvince===provinceid);
    // console.log(selectedDistrictData)
    selectedDistrictData.forEach(data =>  {
      if (!uniqueDistrictId.has(data.idDistrict)) {
        uniqueDistrictId.add(data.idDistrict);
        uniqueDistrict.push({ id: data.idDistrict, name: data.districtName });
      }
    });
    return uniqueDistrict
  }
  ngOnInit(): void {
    this.data = this.dialogService.data;
    this.cluster=this.getUniqueClusters().sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
    this.myForm = this.fb.group({
      branchName: ['', Validators.required],
      branchNameNepali: [''],
      dataProviderBranchId: ['', Validators.required],
      previousDataProviderBranchId: [''],
      selectedCluster:['',Validators.required],
      selectedProvince:['',Validators.required],
      selectedDistrict: ['', Validators.required],
      branchAddress: ['', Validators.required],
      phoneNo: ['', Validators.pattern(/^[+]?\d{0,19}$/)],
      branchManagerEmailId: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      performanceCutOff: ['', Validators.pattern(/^(-?\d+)?$/)],
      isActive: [true],
      accountMonitoring: [false],
      stockInspection: [false],
      pendingDocument: [false],
      insurance: [false],
    });    
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.branchName=this.myForm.value.branchName
      this.serverForm.branchNameNp=this.myForm.value.branchNameNepali
      this.serverForm.dpbranchid=this.myForm.value.dataProviderBranchId
      this.serverForm.prevdpbranchid=this.myForm.value.previousDataProviderBranchId
      this.serverForm.idDistrict=this.myForm.value.selectedDistrict
      this.serverForm.branchAddress=this.myForm.value.branchAddress
      this.serverForm.phoneNo=this.myForm.value.phoneNo
      this.serverForm.bmemailId=this.myForm.value.branchManagerEmailId
      this.serverForm.performanceCutOff=this.myForm.value.performanceCutOff
      this.serverForm.isActive=this.myForm.value.isActive
      this.serverForm.enableKsklinquiryViaAccountMonitoring=this.myForm.value.accountMonitoring
      this.serverForm.enableKsklinquiryViaStockInspection=this.myForm.value.stockInspection
      this.serverForm.enableKsklinquiryViaPendingDocument=this.myForm.value.pendingDocument
      this.serverForm.enableKsklinquiryViaInsurance=this.myForm.value.insurance
      this.loading=true
      this.api.postBranchData(this.serverForm).subscribe((response)=>{
        if(response.status===200){
          this.added=true;
          this.ref.close(this.added);
        }
        else{
          this.loading=false
          this.messageService.add({
            severity: 'error',
            summary: 'Internal Server Error',
            detail: 'Failed to add data!',
          });
          
        }
      })
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
