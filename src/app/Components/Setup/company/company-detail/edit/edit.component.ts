import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService],
  imports: [ToggleButtonModule, CommonModule,FormsModule,CardModule,ButtonModule],
  standalone: true,
})
export class EditComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  data: any[] = [];
  selectedImageUrl: string | ArrayBuffer | null = null;
  repaymentFrq: boolean = false;
  installmentAmt: boolean = false;
  installmentOverdue: boolean = false;
  installmentNumber: boolean = false;
  disbursedAmtDate: boolean = false;
  highestCreditUsage: boolean = false;
  handleImage(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {
    this.data = [this.dialogService.data];
  }
  // selectProduct(product: Product) {
  //     this.ref.close(product);
  // }
}
