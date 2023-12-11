import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterEligibilityDataComponent } from './after-eligibility-data/after-eligibility-data.component';
import { CleanDuplicateEntryComponent } from './clean-duplicate-entry/clean-duplicate-entry.component';
import { HandleMatchingComponent } from './handle-matching/handle-matching.component';
import { ImportDataFromOtherComponent } from './import-data-from-other/import-data-from-other.component';
import { ImportExportCbsDataComponent } from './import-export-cbs-data/import-export-cbs-data.component';
import { ImportEligibilityDataComponent } from './import-eligibility-data/import-eligibility-data.component';
import { ImportViaApiComponent } from './import-via-api/import-via-api.component';
import { InternalScreeningComponent } from './internal-screening/internal-screening.component';



@NgModule({
  declarations: [
    AfterEligibilityDataComponent,
    CleanDuplicateEntryComponent,
    HandleMatchingComponent,
    ImportDataFromOtherComponent,
    ImportEligibilityDataComponent,
    ImportExportCbsDataComponent,
    ImportViaApiComponent,
    InternalScreeningComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DatabaseManagementModule { }
