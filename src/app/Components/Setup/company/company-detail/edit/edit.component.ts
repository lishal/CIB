import { Component, OnInit } from '@angular/core';
import {
  DynamicDialogRef,
  DialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService],
  imports: [CardModule, ButtonModule, CommonModule],
  standalone: true,
})
export class EditComponent implements OnInit {
  constructor(
    private dialogService: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}
  data: any[] = [];
  selectedImageUrl: string | ArrayBuffer | null = null;
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
