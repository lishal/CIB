import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigModule } from './app-config.module';
import { SetupModule } from './Components/Setup/setup.module';
import { CreditModule } from './Components/Credit/credit.module';
import { LoginModule } from './Components/login/login.module';
import { DashboardModule } from './Components/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppConfigModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SetupModule,
    CreditModule,
    LoginModule,
    DashboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
