import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { PopupMessageComponent } from './popup-message.component';


@NgModule({
  declarations: [
    PopupMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    ToastModule,
  ]
})
export class PopupMessageModule { }
