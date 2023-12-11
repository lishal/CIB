import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { ValuatorComponent } from './valuator.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { InnerValuatorComponent } from './valuator/valuator.component';


@NgModule({
  declarations: [
    ValuatorComponent,
    RelationshipComponent,
    InnerValuatorComponent
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
export class ValuatorModule { }
