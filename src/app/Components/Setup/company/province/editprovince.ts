import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-edit-province',
    template: ` <h1>I am from edit</h1>`,
    providers: [DialogService]
})
export class EditProvince implements OnInit {

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