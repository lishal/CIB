
import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-view-role',
    template: ` <h1>I am from View</h1>`,
    providers: [DialogService]
})
export class ViewRole implements OnInit {

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