import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddLookupIffVersionComponent } from './add/add.component';
import { EditLookupIffVersionComponent } from './edit/edit.component';
import { ViewLookupIffVersionComponent } from './view/view.component';
import { DeleteLookupIffVersionComponent } from './delete/delete.component';
import { IffService } from 'src/app/Services/Setup/Lookup-List/iff.service';
@Component({
  selector: 'app-iff-version',
  templateUrl: './iff-version.component.html',
  styleUrls: ['./iff-version.component.css'],
  providers: [DialogService, MessageService],
})
export class IffVersionComponent implements OnInit {
  constructor(
    public api: IffService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  addData() {
    this.ref = this.dialogService.open(AddLookupIffVersionComponent, {
      header: `Add Dropdown Header`,
      width: '90%',
      height: '80%',
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
  editData(id: string) {
    const editData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(EditLookupIffVersionComponent, {
      header: `Edit Dropdown Heading for ${id}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: editData,
    });
    this.ref.onClose.subscribe((datas: any) => {
      if (datas !== undefined) {
        if (datas[1] === true) {
          const index = this.data.findIndex(
            (data) => data.loginIdentifer === id
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
  viewData(id: string) {
    const viewData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewLookupIffVersionComponent, {
      header: `View Dropdown Heading for ${id}`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: viewData,
    });
  }
  deleteData(id: string) {
    const deleteData = this.data.find(
      (data) => data.id === id
    );
    this.ref = this.dialogService.open(DeleteLookupIffVersionComponent, {
      header: `Delete Dropdown Heading for ${id} id`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: deleteData,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data === 'accepted') {
        const index = this.data.findIndex(
          (data) => data.vettype === id
        );
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
    this.data = [
      {
        id: '1',
        natureOfData: true,
        versionComment:'test',
        isActive: false,
      },
    ];
  }
}
