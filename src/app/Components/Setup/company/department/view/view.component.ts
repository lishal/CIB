import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DialogService],
  imports: [ButtonModule, CalendarModule, FormsModule],
  standalone: true,
})
export class ViewDepartmentComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  data: any[] = [];
  doe: Date | undefined;
  ngOnInit() {
    this.data = [this.dialogService.data];
    this.doe = new Date(this.data[0].doe);
  }
  onCancel() {
    this.ref.close();
  }
}
