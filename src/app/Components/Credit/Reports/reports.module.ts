import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiclReportComponent } from './cicl-report/cicl-report.component';
import { GuarantorSearchComponent } from './guarantor-search/guarantor-search.component';
import { NonComplianceReportsComponent } from './non-compliance-reports/non-compliance-reports.component';
import { OtherReportsComponent } from './other-reports/other-reports.component';
import { PerformanceReportsComponent } from './performance-reports/performance-reports.component';
import { SegmentReportComponent } from './segment-report/segment-report.component';
import { ValuatorByBranchComponent } from './valuator-by-branch/valuator-by-branch.component';
import { ValuatorReportsComponent } from './valuator-reports/valuator-reports.component';



@NgModule({
  declarations: [
    CiclReportComponent,
    GuarantorSearchComponent,
    NonComplianceReportsComponent,
    OtherReportsComponent,
    PerformanceReportsComponent,
    SegmentReportComponent,
    ValuatorByBranchComponent,
    ValuatorReportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
