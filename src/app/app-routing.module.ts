import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CompanyComponent } from './Components/Setup/company/company.component';
import { EmployeeComponent } from './Components/Setup/employee/employee.component';
import { ValuatorComponent } from './Components/Setup/valuator/valuator.component';
import { LookupListComponent } from './Components/Setup/lookup-list/lookup-list.component';
import { SecurityComponent } from './Components/Setup/security/security.component';
import { AdManagementComponent } from './Components/Setup/ad-management/ad-management.component';
import { EmailTemplatesComponent } from './Components/Setup/email-templates/email-templates.component';
import { SmsTemplatesComponent } from './Components/Setup/sms-templates/sms-templates.component';
import { PopupMessageComponent } from './Components/Setup/popup-message/popup-message.component';
import { CreditDashboardComponent } from './Components/Credit/dashboard/dashboard.component';
import { EmailConfigComponent } from './Components/Credit/email-config/email-config.component';
import { CibEntryComponent } from './Components/Credit/cib-entry/cib-entry.component';
import { ValuatorBranchLinkComponent } from './Components/Credit/valuator-branch-link/valuator-branch-link.component';
import { CibViewerComponent } from './Components/Credit/cib-viewer/cib-viewer.component';
import { GenerateIffComponent } from './Components/Credit/generate-iff/generate-iff.component';
import { CheckForBlacklistComponent } from './Components/Credit/check-for-blacklist/check-for-blacklist.component';
import { CleanDuplicateEntryComponent } from './Components/Credit/Database_Management/clean-duplicate-entry/clean-duplicate-entry.component';
import { ImportDataFromOtherComponent } from './Components/Credit/Database_Management/import-data-from-other/import-data-from-other.component';
import { ImportExportCbsDataComponent } from './Components/Credit/Database_Management/import-export-cbs-data/import-export-cbs-data.component';
import { ImportViaApiComponent } from './Components/Credit/Database_Management/import-via-api/import-via-api.component';
import { AfterEligibilityDataComponent } from './Components/Credit/Database_Management/after-eligibility-data/after-eligibility-data.component';
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
import { ValidateEntryComponent } from './Components/Credit/validate-entry/validate-entry.component';
import { CompanyDetailComponent } from './Components/Setup/company/company-detail/company-detail.component';
import { ProvinceComponent } from './Components/Setup/company/province/province.component';
import { BranchComponent } from './Components/Setup/company/branch/branch.component';
import { DepartmentComponent } from './Components/Setup/company/department/department.component';
import { RoleComponent } from './Components/Setup/company/role/role.component';
import { BackupComponent } from './Components/Setup/company/backup/backup.component';
import { InnerValuatorComponent } from './Components/Setup/valuator/valuator/valuator.component';
import {RelationshipComponent} from './Components/Setup/valuator/relationship/relationship.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        children: [
          {
            path: 'companyDetail',
            component: CompanyDetailComponent,
          },
          {
            path: 'province',
            component: ProvinceComponent,
          },
          {
            path: 'branch',
            component: BranchComponent,
          },
          {
            path: 'department',
            component: DepartmentComponent,
          },
          {
            path: 'role',
            component: RoleComponent,
          },
          {
            path: 'backup',
            component: BackupComponent,
          },
        ],
      },
      { path: 'employee', component: EmployeeComponent },
      { path: 'valuator', component: ValuatorComponent,children:[
        {
        path:'valuatorDetail',
        component:InnerValuatorComponent
        },
        {
          path:'relationship',
          component:RelationshipComponent
        }
    ] },
      { path: 'lookup', component: LookupListComponent },
      { path: 'admanagement', component: AdManagementComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'emailTemplates', component: EmailTemplatesComponent },
      { path: 'smsTemplates', component: SmsTemplatesComponent },
      { path: 'popupMessage', component: PopupMessageComponent },
      { path: 'creditDashboard', component: CreditDashboardComponent },
      { path: 'emailConfig', component: EmailConfigComponent },
      { path: 'cibEntry', component: CibEntryComponent },
      { path: 'valuatorBranchLink', component: ValuatorBranchLinkComponent },
      { path: 'validateEntry', component: ValidateEntryComponent },
      { path: 'cibViewer', component: CibViewerComponent },
      { path: 'generateIFf', component: GenerateIffComponent },
      { path: 'checkBlackList', component: CheckForBlacklistComponent },
      { path: 'cleanDuplicateEntry', component: CleanDuplicateEntryComponent },
      { path: 'importDataFromOther', component: ImportDataFromOtherComponent },
      { path: 'importExportCbsData', component: ImportExportCbsDataComponent },
      { path: 'importViaApi', component: ImportViaApiComponent },
      {
        path: 'afterEligibilityData',
        component: AfterEligibilityDataComponent,
      },
      { path: 'internalScreening', component: InternalScreeningComponent },
      { path: 'handleMatching', component: HandleMatchingComponent },
      { path: 'guarantorSearch', component: GuarantorSearchComponent },
      { path: 'valuatorByBranch', component: ValuatorByBranchComponent },
      { path: 'performanceReport', component: PerformanceReportsComponent },
      { path: 'segmentReport', component: SegmentReportComponent },
      {
        path: 'nonComplianceReports',
        component: NonComplianceReportsComponent,
      },
      { path: 'valuatorReports', component: ValuatorReportsComponent },
      { path: 'otherReports', component: OtherReportsComponent },
      { path: 'ciclReport', component: CiclReportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
