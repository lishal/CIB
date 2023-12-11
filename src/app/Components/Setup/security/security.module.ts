import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { PermissionByEmployeeComponent } from './permission-by-employee/permission-by-employee.component';
import { PermissionByRoleComponent } from './permission-by-role/permission-by-role.component';
import { PermissionHeaderComponent } from './permission-header/permission-header.component';
import { SecurityComponent } from './security.component';


@NgModule({
  declarations: [
    PermissionByEmployeeComponent,
    PermissionByRoleComponent,
    PermissionHeaderComponent,
    SecurityComponent
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
export class SecurityModule { }
