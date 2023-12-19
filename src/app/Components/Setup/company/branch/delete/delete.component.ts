import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BranchService } from 'src/app/Services/Setup/Company/branch.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-branch-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [MessageService,DialogService, ConfirmationService],
  imports: [ButtonModule, ConfirmPopupModule,DropdownModule,ToastModule,CommonModule],
  standalone: true,
})
export class DeleteBranchComponent  implements OnInit{
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef,
     private confirmationService: ConfirmationService,private api:BranchService,
     private messageService: MessageService,) {}
  data: any[] = [];
  loading:boolean=false;
  clusterDetail:any[]=[];
  ngOnInit() {
      this.data=this.dialogService.data;
      
      this.clusterDetail =[this.data[1].find((item:any)=>item.idDistrict===this.data[0].idDistrict)]
      if(this.clusterDetail[0]===undefined){
        this.clusterDetail[0]={clusterName:'-',provinceName:'-',districtName:'-'};
      }      
  }
  onDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to delete?',
      icon: 'fa-solid fa-exclamation-triangle',
       accept: () => {
        this.loading=true
        this.deleteData(this.data[0].id)
      },
      reject: () => {
        this.ref.close('rejected');
      },
    });
  }

  deleteData(id: string) {
    this.loading = true;
  
    this.api.deleteData(id).subscribe(
      (response) => {
        if (response.status === 200) {
          this.ref.close();
        } else {
          this.handleError('Failed to delete data!');
        }
      },
      (error) => {
        this.handleError('Server error occurred!');
      }
    );
  }
  
  private handleError(errorMessage: string) {
    this.loading = false;
    this.messageService.add({
      severity: 'error',
      summary: 'Internal Server Error',
      detail: errorMessage,
    });
  }
  onCancel() {
    this.ref.close();
  }
}
