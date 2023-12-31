import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyDetailService } from '../../../../Services/Setup/Company/company-detail.service';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  providers: [DialogService, MessageService],
})
export class CompanyDetailComponent implements OnInit, OnDestroy {
  ref: DynamicDialogRef | undefined;
  isLoading: boolean = false;
  constructor(
    private api: CompanyDetailService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  data = [
    {
      id: 1,
      companyName: 'NIC Asia Bank Ltd',
      abbreveration: 'abbreveration',
      dataProviderId: 1,
      prevDataProviderId: 0,
      tradingSymbol: '',
      secretKey: '',
      repaymentFrq: false,
      installmentAmt: false,
      installmentOverdue: false,
      installmentNumber: false,
      disbursedAmtDate: false,
      highestCreditUsage: false,
    },
  ];

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewComponent, {
      header: `View Company`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: displayData,
    });
  }

  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditComponent, {
      header: `Edit Company`,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: editData,
    });

    this.ref.onClose.subscribe((returnedData: any) => {
      if (returnedData !== undefined) {
        if (returnedData[1] === true) {
          this.data = [returnedData[0][1]];
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data Updated',
          });
        }
      }
    });
  }

  ngOnInit() {
    // this.isLoading = true;
    // this.api.fetchData().subscribe(
    //   (response) => {
    //     this.data = response;
    //     this.isLoading = false;
    //     // console.log(this.data)
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   }
    // );
  }
  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
