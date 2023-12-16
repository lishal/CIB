import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-branch-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DialogService],
  imports: [ButtonModule,DropdownModule],
  standalone:true
})
export class ViewBranchComponent implements OnInit{
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef) {}
    data: any[] = [];
    clusterDetail:any[]=[];
    
    
    ngOnInit() {
        this.data=this.dialogService.data;
        this.clusterDetail =[this.data[1].find((item:any)=>item.idDistrict===this.data[0].idDistrict)]
    }
    onCancel() {
      this.ref.close();
    }

}
