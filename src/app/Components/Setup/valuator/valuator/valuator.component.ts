import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ValuatorService } from 'src/app/Services/Setup/valuator.service';
import { AddValuatorComponent } from './add/add.component';

@Component({
  selector: 'app-inner-valuator',
  templateUrl: './valuator.component.html',
  styleUrls: ['./valuator.component.css'],
  providers: [MessageService, DialogService],
})
export class InnerValuatorComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: ValuatorService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddValuatorComponent, {
      header: `Add Valuator`,
      width: '90%',
      height: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
  }
  ngOnInit(): void {
    this.data = [
      {
        test: 'test',
        test2: 'test2',
        id: [
          {
            name: 'test',
          },
        ],
      },
    ];
  }
}
