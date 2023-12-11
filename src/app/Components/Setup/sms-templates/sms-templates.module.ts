import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { SmsTemplatesComponent } from './sms-templates.component';



@NgModule({
  declarations: [
    SmsTemplatesComponent
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
export class SmsTemplatesModule { }
