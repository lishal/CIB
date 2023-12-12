import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { BranchComponent } from './branch/branch.component';
import { ProvinceComponent } from './province/province.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { BackupComponent } from './backup/backup.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    BranchComponent,
    ProvinceComponent,
    DepartmentComponent,
    RoleComponent,
    BackupComponent,
    CompanyDetailComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    ToastModule,
    TabMenuModule,
  ],
  exports:[
    
  ]
})
export class CompanyModule { }
