import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
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
import { CustomFilterComponent } from '../../custom-filter/custom-filter.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    BranchComponent,
    ProvinceComponent,
    DepartmentComponent,
    RoleComponent,
    BackupComponent,
    CompanyDetailComponent,
    CompanyComponent,
    CustomFilterComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    ToastModule,
    TabMenuModule,
    InputTextModule,
  ],
  exports: [],
})
export class CompanyModule {}
