import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ValuatorService } from 'src/app/Services/Setup/valuator.service';
import * as FileSaver from 'file-saver';
import { AddVRelationshipComponent } from './add/add.component';
import { EditVRelationshipComponent } from './edit/edit.component';
import { ViewVRelationshipComponent } from './view/view.component';
import { DeleteVRelationshipComponent } from './delete/delete.component';

interface SearchOption {
  name: String;
}

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css'],
  providers: [MessageService, DialogService],
})
export class RelationshipComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  searchOption: SearchOption[] = [];
  constructor(
    private api: ValuatorService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  addData() {
    this.ref = this.dialogService.open(AddVRelationshipComponent, {
      header: `Add Valuator Relationship`,
      width: '90%',
      height: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data !== undefined) {
        if (data[1] === true) {
          this.data.push(data[0]);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data added successfully',
          });
        }
      }
    });
  }
  editData(vreType: string) {
    const editData = this.data.find((data) => data.vreType === vreType);
    this.ref = this.dialogService.open(EditVRelationshipComponent, {
      header: `Edit Valuator Relationship for ${vreType}`,
      width: '90%',
      height: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((datas: any) => {
      if (datas !== undefined) {
        if (datas[1] === true) {
          const index = this.data.findIndex(
            (data) => data.loginIdentifer === vreType
          );
          // this.data[index].vettype = datas[0].vettype;  -->Update the value in DB
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data updated successfully',
          });
        }
      }
    });
  }
  viewData(vreType: string) {
    const viewData = this.data.find((data) => data.vreType === vreType);
    this.ref = this.dialogService.open(ViewVRelationshipComponent, {
      header: `View Valuator Relationship for ${vreType}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: viewData,
    });
  }
  deleteData(vreType: string) {
    const deleteData = this.data.find((data) => data.vreType === vreType);
    this.ref = this.dialogService.open(DeleteVRelationshipComponent, {
      header: `Delete Valuator for ${vreType} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex((data) => data.vreType === vreType);
        this.data.splice(index, 1);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Data deleted successfully',
        });
      } else if (data === 'rejected') {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      }
    });
  }
  ngOnInit(): void {
    this.searchOption = [
      { name: 'Amy Elsner' },
      { name: 'Anna Fali' },
      { name: 'Asiya Javayant' },
      { name: 'Bernardo Dominic' },
      { name: 'Elwin Sharvill' },
      { name: 'Ioni Bowcher' },
      { name: 'Ivan Magalhaes' },
      { name: 'test' },
    ];
    this.data = [
      {
        vreType: 'test',
        vrName: 'VRNAME',
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
