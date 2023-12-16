import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from 'primeng/overlay';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from 'primeng/sidebar';
import { CustomLoadingComponent } from '../custom-loading/custom-loading.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CustomLoadingComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ButtonModule,
    PanelMenuModule,
    SidebarModule,
  ]
})
export class DashboardModule { }
