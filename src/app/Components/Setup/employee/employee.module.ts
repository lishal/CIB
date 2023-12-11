import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { EmployeeComponent } from './employee.component';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    ToastModule
  ]
})
export class EmployeeModule { }
