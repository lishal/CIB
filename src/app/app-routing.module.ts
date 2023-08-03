import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CompanyComponent } from './Components/Setup/company/company.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'dashboard',component:DashboardComponent,
children:[{path:'company',component:CompanyComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
