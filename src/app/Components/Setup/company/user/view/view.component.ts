import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  imports: [ButtonModule, ToastModule, CommonModule, DropdownModule],
  providers: [DialogService],
  standalone: true,
})
export class ViewUserComponent implements OnInit {
  data: any;
  branchData: any;
  roleData: any;
  departmentData: any;
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  ngOnInit(): void {
    this.branchData = [
      this.dialogService.data[0].find(
        (item: any) => item.id === this.dialogService.data[3].idbranch
      ),
    ];
    this.departmentData = [
      this.dialogService.data[1].find(
        (item: any) => item.id === this.dialogService.data[3].idhrdepartment
      ),
    ];
    this.roleData = [
      this.dialogService.data[2].find(
        (item: any) => item.id === this.dialogService.data[3].idhrrole
      ),
    ];
    this.data = [this.dialogService.data[3]];
  }
  onCancel() {
    this.ref.close();
  }
}
