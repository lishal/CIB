import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DialogService],
  imports: [CardModule],
  standalone: true,
})
export class ViewComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  data: any[] = [];
  ngOnInit() {
    this.data = [this.dialogService.data];
  }
}
