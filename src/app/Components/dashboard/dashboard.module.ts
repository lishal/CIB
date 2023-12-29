import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from 'primeng/overlay';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from 'primeng/sidebar';
import { CustomLoadingModule } from '../custom-loading/custom-loading.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    OverlayModule,
    ButtonModule,
    PanelMenuModule,
    SidebarModule,
    CustomLoadingModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
  ],
})
export class DashboardModule {}
