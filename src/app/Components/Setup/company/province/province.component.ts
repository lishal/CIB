import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ProvinceService } from '../../../../Services/Setup/Company/province.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {EditProvince} from './editprovince'
import {ViewProvince} from './viewprovince'

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css'],
  providers: [DialogService]
})
export class ProvinceComponent implements OnInit ,OnDestroy{
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(private api: ProvinceService,public dialogService: DialogService) {}

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewProvince, {
      header: `Detailed View of ${displayData.account_number} account number`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : displayData
  });

  // this.ref.onClose.subscribe((product: Product) => {
     
  // });

  // this.ref.onMaximize.subscribe((value) => {
      
  // });
  }
  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditProvince, {
      header: `Edit Province for ${id} id`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : editData
  });
  }
  deleteData(id: number) {
    const deleteData = this.data.find((data) => data.id === id);
    // console.log(deleteData);
  }
  ngOnInit(): void {
    this.isLoading = true;

    this.api.fetchData().subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
        // console.log(this.data)
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
