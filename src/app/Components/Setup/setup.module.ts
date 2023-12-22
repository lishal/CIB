import { NgModule } from '@angular/core';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { ValuatorModule } from './valuator/valuator.module';
import { LookupListModule } from './lookup-list/lookup-list.module';
import { SecurityModule } from './security/security.module';
import { AdManagementModule } from './ad-management/ad-management.module';
import { EmailTemplatesModule } from './email-templates/email-templates.module';
import { SmsTemplatesModule } from './sms-templates/sms-templates.module';
import { PopupMessageModule } from './popup-message/popup-message.module';

@NgModule({
  declarations: [],
  imports: [
    CompanyModule,
    EmployeeModule,
    ValuatorModule,
    LookupListModule,
    SecurityModule,
    AdManagementModule,
    EmailTemplatesModule,
    SmsTemplatesModule,
    PopupMessageModule,
  ],
})
export class SetupModule {}
