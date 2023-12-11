import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { AdManagementComponent } from './ad-management.component';
import { AdPoolComponent } from './ad-pool/ad-pool.component';
import { MapUserComponent } from './map-user/map-user.component';


@NgModule({
  declarations: [
    AdManagementComponent,
    AdPoolComponent,
    MapUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    ToastModule,
    TabMenuModule
  ]
})
export class AdManagementModule { }
