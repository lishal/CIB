import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmailConfigModule } from './email-config/email-config.module';
import { CibEntryModule } from './cib-entry/cib-entry.module';
import { ValuatorBranchLinkModule } from './valuator-branch-link/valuator-branch-link.module';
import { ValidateEntryModule } from './validate-entry/validate-entry.module';
import { CibViewerModule } from './cib-viewer/cib-viewer.module';
import { GenerateIffModule } from './generate-iff/generate-iff.module';
import { CheckForBlacklistModule } from './check-for-blacklist/check-for-blacklist.module';
import { DatabaseManagementModule } from './Database_Management/database-management.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    EmailConfigModule,
    CibEntryModule,
    ValuatorBranchLinkModule,
    ValidateEntryModule,
    CibViewerModule,
    GenerateIffModule,
    CheckForBlacklistModule,
    DatabaseManagementModule
  ]
})
export class CreditModule { }
