import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import{ButtonModule} from 'primeng/button'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService],
  imports:[CardModule,ButtonModule],
  standalone:true
})
export class EditComponent implements OnInit {
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef) {}
  data: any[] = [];
  uploadedImg:string |null =null;
  handleImage(event:any){
    const file=event.target.files[0];
    if(file){
      const imgData=new FormData();
      imgData.append('image',file);
    }
  }
  ngOnInit() {
      this.data=this.dialogService.data;
      // console.log(this.data);
  }

  // selectProduct(product: Product) {
  //     this.ref.close(product);
  // }
}
