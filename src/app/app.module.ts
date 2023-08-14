import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './Components/Setup/company/company.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { EmployeeComponent } from './Components/Setup/employee/employee.component';
import { ValuatorComponent } from './Components/Setup/valuator/valuator.component';
import { LookupListComponent } from './Components/Setup/lookup-list/lookup-list.component';
import { SecurityComponent } from './Components/Setup/security/security.component';
import { AdManagementComponent } from './Components/Setup/ad-management/ad-management.component';
import { EmailTemplatesComponent } from './Components/Setup/email-templates/email-templates.component';
import { SmsTemplatesComponent } from './Components/Setup/sms-templates/sms-templates.component';
import { PopupMessageComponent } from './Components/Setup/popup-message/popup-message.component';
import { EmailConfigComponent } from './Components/Credit/email-config/email-config.component';
import { CibEntryComponent } from './Components/Credit/cib-entry/cib-entry.component';
import { ValuatorBranchLinkComponent } from './Components/Credit/valuator-branch-link/valuator-branch-link.component';
import { ValidateEntryComponent } from './Components/Credit/validate-entry/validate-entry.component';
import { CibViewerComponent } from './Components/Credit/cib-viewer/cib-viewer.component';
import { GenerateIffComponent } from './Components/Credit/generate-iff/generate-iff.component';
import { CheckForBlacklistComponent } from './Components/Credit/check-for-blacklist/check-for-blacklist.component';
import { CleanDuplicateEntryComponent } from './Components/Credit/Database_Management/clean-duplicate-entry/clean-duplicate-entry.component';
import { ImportDataFromOtherComponent } from './Components/Credit/Database_Management/import-data-from-other/import-data-from-other.component';
import { ImportExportCbsDataComponent } from './Components/Credit/Database_Management/import-export-cbs-data/import-export-cbs-data.component';
import { ImportViaApiComponent } from './Components/Credit/Database_Management/import-via-api/import-via-api.component';
import { ImportEligibilityDataComponent } from './Components/Credit/Database_Management/import-eligibility-data/import-eligibility-data.component';
import { InternalScreeningComponent } from './Components/Credit/Database_Management/internal-screening/internal-screening.component';
import { HandleMatchingComponent } from './Components/Credit/Database_Management/handle-matching/handle-matching.component';
import { GuarantorSearchComponent } from './Components/Credit/Reports/guarantor-search/guarantor-search.component';
import { ValuatorByBranchComponent } from './Components/Credit/Reports/valuator-by-branch/valuator-by-branch.component';
import { PerformanceReportsComponent } from './Components/Credit/Reports/performance-reports/performance-reports.component';
import { SegmentReportComponent } from './Components/Credit/Reports/segment-report/segment-report.component';
import { NonComplianceReportsComponent } from './Components/Credit/Reports/non-compliance-reports/non-compliance-reports.component';
import { ValuatorReportsComponent } from './Components/Credit/Reports/valuator-reports/valuator-reports.component';
import { OtherReportsComponent } from './Components/Credit/Reports/other-reports/other-reports.component';
import { CiclReportComponent } from './Components/Credit/Reports/cicl-report/cicl-report.component';
import { AfterEligibilityDataComponent } from './Components/Credit/Database_Management/after-eligibility-data/after-eligibility-data.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CompanyDetailComponent } from './Components/Setup/company/company-detail/company-detail.component';
import { ProvinceComponent } from './Components/Setup/company/province/province.component';
import { BranchComponent } from './Components/Setup/company/branch/branch.component';
import { DepartmentComponent } from './Components/Setup/company/department/department.component';
import { RoleComponent } from './Components/Setup/company/role/role.component';
import { BackupComponent } from './Components/Setup/company/backup/backup.component';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CompanyComponent,
    EmployeeComponent,
    ValuatorComponent,
    LookupListComponent,
    SecurityComponent,
    AdManagementComponent,
    EmailTemplatesComponent,
    SmsTemplatesComponent,
    PopupMessageComponent,
    EmailConfigComponent,
    CibEntryComponent,
    ValuatorBranchLinkComponent,
    ValidateEntryComponent,
    CibViewerComponent,
    GenerateIffComponent,
    CheckForBlacklistComponent,
    CleanDuplicateEntryComponent,
    ImportDataFromOtherComponent,
    ImportExportCbsDataComponent,
    ImportViaApiComponent,
    ImportEligibilityDataComponent,
    InternalScreeningComponent,
    HandleMatchingComponent,
    GuarantorSearchComponent,
    ValuatorByBranchComponent,
    PerformanceReportsComponent,
    SegmentReportComponent,
    NonComplianceReportsComponent,
    ValuatorReportsComponent,
    OtherReportsComponent,
    CiclReportComponent,
    AfterEligibilityDataComponent,
    CompanyDetailComponent,
    ProvinceComponent,
    BranchComponent,
    DepartmentComponent,
    RoleComponent,
    BackupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TabMenuModule,
    TableModule,
    OverlayModule,
    RippleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
