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
import {
  BranchService,
  postBranch,
} from 'src/app/Services/Setup/Company/branch.service';

interface Dropdown {
  id: string;
  name: string;
}

@Component({
  selector: 'app-branch-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    DropdownModule,
  ],
  providers: [MessageService, DialogService],
  standalone: true,
})
export class EditBranchComponent implements OnInit {
  myForm!: FormGroup;
  data: any[] = [];
  loading: boolean = false;
  updated: boolean = false;
  cluster: Dropdown[] | undefined;
  province: Dropdown[] | undefined;
  district: Dropdown[] | undefined;
  clusterDetail: any[] = [];

  serverForm: postBranch = {
    createdOn: '',
    updatedOn: new Date().toISOString(),
    createdBy: '',
    updatedBy: 'Lishal',
    dpbranchid: '',
    prevdpbranchid: '',
    branchName: '',
    branchAddress: '',
    phoneNo: '',
    branchNameNp: '',
    bmemailId: '',
    idDistrict: '',
    performanceCutOff: 0,
    enableKsklinquiryViaAccountMonitoring: true,
    enableKsklinquiryViaStockInspection: true,
    enableKsklinquiryViaPendingDocument: true,
    enableKsklinquiryViaInsurance: true,
    isActive: true,
  };
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig,
    private api: BranchService
  ) {}
  clusterOnChange() {
    this.province = this.getUniqueProvinces(
      this.myForm.value.selectedCluster
    ).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
    if (this.myForm.value.selectedCluster === null) {
      this.district = [];
    }
  }

  provinceOnChange() {
    this.district = this.getUniqueDistrict(
      this.myForm.value.selectedCluster,
      this.myForm.value.selectedProvince
    ).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
  }

  private getUniqueClusters() {
    const uniqueClusterIds = new Set<string>();
    const uniqueClusters: { id: string; name: string }[] = [];

    this.data[1].forEach((cluster: any) => {
      if (!uniqueClusterIds.has(cluster.idCluster)) {
        uniqueClusterIds.add(cluster.idCluster);
        uniqueClusters.push({
          id: cluster.idCluster,
          name: cluster.clusterName,
        });
      }
    });
    return uniqueClusters;
  }
  private getUniqueProvinces(clusterid: string) {
    const uniqueProvinceIds = new Set<string>();
    const uniqueProvince: { id: string; name: string }[] = [];
    const selectedProvinceData = this.data[1].filter(
      (data: any) => data.idCluster === clusterid
    );
    selectedProvinceData.forEach((data: any) => {
      if (!uniqueProvinceIds.has(data.idProvince)) {
        uniqueProvinceIds.add(data.idProvince);
        uniqueProvince.push({ id: data.idProvince, name: data.provinceName });
      }
    });
    return uniqueProvince;
  }
  private getUniqueDistrict(clusterid: string, provinceid: string) {
    const uniqueDistrictId = new Set<string>();
    const uniqueDistrict: { id: string; name: string }[] = [];
    const selectedDistrictData = this.data[1].filter(
      (data: any) =>
        data.idCluster === clusterid && data.idProvince === provinceid
    );
    selectedDistrictData.forEach((data: any) => {
      if (!uniqueDistrictId.has(data.idDistrict)) {
        uniqueDistrictId.add(data.idDistrict);
        uniqueDistrict.push({ id: data.idDistrict, name: data.districtName });
      }
    });
    return uniqueDistrict;
  }
  ngOnInit(): void {
    this.data = this.dialogService.data;
    this.clusterDetail = [
      this.data[1].find(
        (item: any) => item.idDistrict === this.data[0].idDistrict
      ),
    ];
    if (this.clusterDetail[0] === undefined) {
      this.clusterDetail[0] = {
        idCluster: '',
        clusterName: '',
        idProvince: '',
        provinceName: '',
        idDistrict: '',
        districtName: '',
      };
    }
    this.myForm = this.fb.group({
      branchName: [this.data[0].branchName, Validators.required],
      branchNameNepali: [this.data[0].branchNameNp],
      dataProviderBranchId: [this.data[0].dpbranchid, Validators.required],
      selectedCluster: [this.clusterDetail[0].idCluster, Validators.required],
      selectedProvince: [this.clusterDetail[0].idProvince, Validators.required],
      selectedDistrict: [this.clusterDetail[0].idDistrict, Validators.required],
      previousDataProviderBranchId: [this.data[0].prevdpbranchid],
      branchAddress: [this.data[0].branchAddress, Validators.required],
      phoneNo: [this.data[0].phoneNo, Validators.pattern(/^[+]?\d{0,19}$/)],
      branchManagerEmailId: [
        this.data[0].bmemailId,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      performanceCutOff: [this.data[0].performanceCutOff, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],
      accountMonitoring: [
        this.data[0].enableKsklinquiryViaAccountMonitoring,
        Validators.required,
      ],
      stockInspection: [
        this.data[0].enableKsklinquiryViaStockInspection,
        Validators.required,
      ],
      pendingDocument: [
        this.data[0].enableKsklinquiryViaPendingDocument,
        Validators.required,
      ],
      insurance: [
        this.data[0].enableKsklinquiryViaInsurance,
        Validators.required,
      ],
    });
    this.cluster = this.getUniqueClusters().sort((a, b) =>
      a.name.toString().localeCompare(b.name.toString())
    );
    this.province = this.getUniqueProvinces(
      this.myForm.value.selectedCluster
    ).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
    this.district = this.getUniqueDistrict(
      this.myForm.value.selectedCluster,
      this.myForm.value.selectedProvince
    ).sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
  }
  onClearDropdown() {
    this.clusterDetail[0] = {
      idCluster: '',
      clusterName: '',
      idProvince: '',
      provinceName: '',
      idDistrict: '',
      districtName: '',
    };
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.serverForm.branchName = this.myForm.value.branchName;
      this.serverForm.branchNameNp = this.myForm.value.branchNameNepali;
      this.serverForm.dpbranchid = this.myForm.value.dataProviderBranchId;
      this.serverForm.prevdpbranchid =
        this.myForm.value.previousDataProviderBranchId;
      this.serverForm.idDistrict = this.myForm.value.selectedDistrict;
      this.serverForm.branchAddress = this.myForm.value.branchAddress;
      this.serverForm.phoneNo = this.myForm.value.phoneNo;
      this.serverForm.bmemailId = this.myForm.value.branchManagerEmailId;
      this.serverForm.performanceCutOff = this.myForm.value.performanceCutOff;
      this.serverForm.isActive = this.myForm.value.isActive;
      this.serverForm.enableKsklinquiryViaAccountMonitoring =
        this.myForm.value.accountMonitoring;
      this.serverForm.enableKsklinquiryViaStockInspection =
        this.myForm.value.stockInspection;
      this.serverForm.enableKsklinquiryViaPendingDocument =
        this.myForm.value.pendingDocument;
      this.serverForm.enableKsklinquiryViaInsurance =
        this.myForm.value.insurance;
      this.serverForm.createdBy = this.data[0].createdBy;
      this.serverForm.createdOn = this.data[0].createdOn;
      this.loading = true;
      console.log(this.serverForm);
      this.api.editBranchData(this.serverForm, this.data[0].id).subscribe(
        (response) => {
          if (response.status === 200) {
            this.updated = true;
            this.ref.close(this.updated);
          } else {
            this.handleError('Failed to add data!');
          }
        },
        (error) => {
          this.handleError('Server error occurred!');
        }
      );
    } else {
      this.handleError('Please check all the fields!');
    }
  }
  private handleError(errorMessage: string) {
    this.loading = false;
    this.messageService.add({
      severity: 'error',
      summary: 'Internal Server Error',
      detail: errorMessage,
    });
  }
  onCancel() {
    this.ref.close();
  }
}
