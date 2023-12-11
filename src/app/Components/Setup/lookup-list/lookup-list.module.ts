import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownElementComponent } from './dropdown-element/dropdown-element.component';
import { DropdownHeaderComponent } from './dropdown-header/dropdown-header.component';
import { IffVersionComponent } from './iff-version/iff-version.component';
import { LookupListComponent } from './lookup-list.component';


@NgModule({
  declarations: [
    DropdownElementComponent,
    DropdownHeaderComponent,
    IffVersionComponent,
    LookupListComponent
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
export class LookupListModule { }
