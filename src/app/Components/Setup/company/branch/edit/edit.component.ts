import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService]
})
export class EditComponent implements OnInit {
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
