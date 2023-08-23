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

interface District {
  name: String;
}
interface Province {
  name: String;
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
  providers: [MessageService],
  standalone: true,
})
export class AddBranchComponent implements OnInit {
  myForm!: FormGroup;
  stateOptions: any[] = [
    { label: 'False', value: false },
    { label: 'True', value: true },
  ];
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
  selectedDistrict=this.districtList[0].name

  //Province List
  provinceList: Province[] = [{ name: 'karnali' }, { name: 'bagmati' }];
  selectedProvince=this.provinceList[0].name

  added: boolean = false;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    console.log(this.selectedDistrict)
    this.myForm = this.fb.group({
      branchName: ['', Validators.required],
      branchNameNepali: [''],
      dataProviderBranchId: ['', Validators.required],
      previousDataProviderBranchId: [''],
      district: [this.selectedDistrict],
      provinceName: [this.selectedProvince],

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
    this.myForm.get('district')?.valueChanges.subscribe((value)=>{
      this.selectedDistrict=value.name
    })
    this.myForm.get('provinceName')?.valueChanges.subscribe((value)=>{
      this.selectedProvince=value.name
    })
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      formValues.district = this.selectedDistrict;
      formValues.provinceName = this.selectedProvince;
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
  onCancle() {
    this.ref.close();
  }
}
