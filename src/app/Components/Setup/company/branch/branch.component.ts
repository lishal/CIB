import { Component, OnInit ,OnDestroy } from '@angular/core';
import { BranchService } from '../../../../Services/Setup/Company/branch.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {EditComponent} from './edit/edit.component'
import {ViewComponent} from './view/view.component'
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [DialogService]
})
export class BranchComponent {
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;
  constructor(private api: BranchService,public dialogService: DialogService) {}

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(ViewComponent, {
      header: `Detailed View of ${displayData.account_number} account number`,
      width: '70%',
      height:'60%',
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
    this.ref = this.dialogService.open(EditComponent, {
      header: `Edit Province for ${id} id`,
      width: '70%',
      height:'60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : editData
  });
  }
  deleteData(id: number) {
    const deleteData = this.data.find((data) => data.id === id);
    this.ref = this.dialogService.open(DeleteComponent, {
      header: `Edit Province for ${id} id`,
      width: '70%',
      height:'60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : deleteData
  });
  }
  ngOnInit(): void {
    this.isLoading = true;

    this.api.fetchData().subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
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
