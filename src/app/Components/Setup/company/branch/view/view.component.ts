import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-branch-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DialogService]
})
export class ViewBranchComponent implements OnInit{
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef) {}
    data: any[] = [];
    ngOnInit() {
        this.data=this.dialogService.data;
        // console.log(this.data);
    }

    // selectProduct(product: Product) {
    //     this.ref.close(product);
    // }

}
