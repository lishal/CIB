import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef,DialogService,DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-vrelationship-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DialogService],
  imports: [ButtonModule],
  standalone:true
})
export class ViewVRelationshipComponent implements OnInit{
  constructor(private dialogService: DynamicDialogConfig, public ref: DynamicDialogRef) {}
    data: any[] = [];
    ngOnInit() {
        this.data=[this.dialogService.data];
    }
    onCancel() {
      this.ref.close();
    }
}
