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
import { DropdownModule } from 'primeng/dropdown';

interface District {
  name: String;
}
interface Province {
  name: String;
}

@Component({
  selector: 'app-branch-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
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
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
  updated: boolean = false;

  //District List
  districtList: District[] = [
    { name: 'Achham' },
    { name: 'Arghakhanchi' },
    { name: 'Baglung' },
    { name: 'Baitadi' },
    { name: 'Bajhang' },
    { name: 'Bajura' },
    { name: 'Banke' },
    { name: 'Bara' },
    { name: 'Bardiya' },
    { name: 'Bhaktapur' },
    { name: 'Bhojpur' },
    { name: 'Chitwan' },
    { name: 'Dadeldhura' },
    { name: 'Dailekh' },
    { name: 'Dang' },
    { name: 'Darchula' },
    { name: 'Dhading' },
    { name: 'Dhankuta' },
    { name: 'Dhanusa' },
    { name: 'Dolakha' },
    { name: 'Dolpa' },
    { name: 'Doti' },
    { name: 'Gorkha' },
    { name: 'Gulmi' },
    { name: 'Humla' },
    { name: 'Ilam' },
    { name: 'Jajarkot' },
    { name: 'Jhapa' },
    { name: 'Jumla' },
    { name: 'Kailali' },
    { name: 'Kalikot' },
    { name: 'Kanchanpur' },
    { name: 'Kapilvastu' },
    { name: 'Kaski' },
    { name: 'Kathmandu' },
    { name: 'Kavrepalanchok' },
    { name: 'Khotang' },
    { name: 'Lalitpur' },
    { name: 'Lamjung' },
    { name: 'Mahottari' },
    { name: 'Makawanpur' },
    { name: 'Manang' },
    { name: 'Morang' },
    { name: 'Mugu' },
    { name: 'Mustang' },
    { name: 'Myagdi' },
    { name: 'Nawalpur' },
    { name: 'Nuwakot' },
    { name: 'Okhaldhunga' },
    { name: 'Palpa' },
    { name: 'Panchthar' },
    { name: 'Parasi' },
    { name: 'Parbat' },
    { name: 'Parsa' },
    { name: 'Pyuthan' },
    { name: 'Ramechhap' },
    { name: 'Rasuwa' },
    { name: 'Rautahat' },
    { name: 'Rolpa' },
    { name: 'Rukum' },
    { name: 'Rukum' },
    { name: 'Rupandehi' },
    { name: 'Salyan' },
    { name: 'Sankhuwasabha' },
    { name: 'Saptari' },
    { name: 'Sarlahi' },
    { name: 'Sindhuli' },
    { name: 'Sindhupalchok' },
    { name: 'Siraha' },
    { name: 'Solukhumbu' },
    { name: 'Sunsari' },
    { name: 'Surkhet' },
    { name: 'Syangja' },
    { name: 'Tanahu' },
    { name: 'Taplejung' },
    { name: 'Terhathum' },
    { name: 'Udayapur' },
  ];
  //Province List
  provinceList: Province[] = [{ name: 'Karnali' }, { name: 'Bagmati' }];
  oldDataProviderBranchId: string | undefined;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService,
    private dialogService: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.data = [this.dialogService.data];
    this.myForm = this.fb.group({
      branchName: [this.data[0].branchName, Validators.required],
      branchNameNepali: [this.data[0].branchNameNepali],
      dataProviderBranchId: [
        this.data[0].dataProviderBranchId,
        Validators.required,
      ],
      previousDataProviderBranchId: [this.data[0].previousDataProviderBranchId],
      district: [this.data[0].district, Validators.required],
      provinceName: [this.data[0].provinceName, Validators.required],

      branchAddress: [this.data[0].branchAddress, Validators.required],
      phoneNo: [this.data[0].phoneNo, Validators.pattern('^[0-9]{10}$')],
      branchManagerEmailId: [
        this.data[0].branchManagerEmailId,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      performanceCutOff: [this.data[0].performanceCutOff, Validators.required],
      isActive: [this.data[0].isActive, Validators.required],
      accountMonitoring: [this.data[0].accountMonitoring, Validators.required],
      stockInspection: [this.data[0].stockInspection, Validators.required],
      pendingDocument: [this.data[0].pendingDocument, Validators.required],
      insurance: [this.data[0].insurance, Validators.required],
    });
    this.oldDataProviderBranchId = this.myForm.get(
      'dataProviderBranchId'
    )?.value;
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      this.updated = true;
      this.ref.close([formValues, this.updated, this.oldDataProviderBranchId]);
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
