import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyDetailService } from '../../../../Services/Setup/Company/company-detail.service';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  providers: [DialogService],
})
export class CompanyDetailComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: CompanyDetailService,
    public dialogService: DialogService
  ) {}
  data = [
    {
      id: 1,
      companyName: 'NIC Asia Bank Ltd',
      abbreveration: '',
      dpid: '014',
      prevDpid: 0,
      tradingStm: '',
      secretKey: '',
    },
  ];

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewComponent, {
      header: `Detailed View of ${displayData?.id} account number`,
      width: '75%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: displayData,
    });
  }

  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditComponent, {
      header: `Edit Company`,
      width: '75%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
  }

  ngOnInit() {
    this.data;
  }
}
