import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ValuatorService } from 'src/app/Services/Setup/valuator.service';
import * as FileSaver from 'file-saver';
interface SearchOption {
  name: String;
}

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css'],
  providers: [MessageService, DialogService],
})


export class RelationshipComponent implements OnInit{
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  searchOption: SearchOption[] = [];
  constructor(
    private api: ValuatorService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.searchOption = [
      { name: 'Amy Elsner' },
      { name: 'Anna Fali' },
      { name: 'Asiya Javayant' },
      { name: 'Bernardo Dominic' },
      { name: 'Elwin Sharvill' },
      { name: 'Ioni Bowcher'},
      { name: 'Ivan Magalhaes'},
      { name: 'test'},
  ];
    this.data = [
      {
        vreType: 'test',
        vrName:'VRNAME',
        test: 'test2',
        id: [
          {
            name: 'test',
          },
        ],
      },
    ];
  }
}
