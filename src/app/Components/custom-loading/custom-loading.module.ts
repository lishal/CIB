import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoadingComponent } from './custom-loading.component';

@NgModule({
  declarations: [CustomLoadingComponent],
  exports: [CustomLoadingComponent],
  imports: [CommonModule],
})
export class CustomLoadingModule {}
