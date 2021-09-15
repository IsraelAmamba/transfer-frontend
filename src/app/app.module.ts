import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'angular-ng-stepper';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { LocalToLocalComponent } from './transfer/own-account/local-to-local/local-to-local.component';
import { StepFourComponent } from './steps/step-four/step-four.component';
import { LeftnavComponent } from './layout/leftnav/leftnav.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SavingsComponent } from './accounts/savings/savings.component';
import { CurrentComponent } from './accounts/current/current.component';
import { LoginComponent } from './access/login/login.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthService } from './core/services/application/auth.service';
import { AuthGuardService } from './core/services/guards/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LocalStorageService } from './core/services/helpers/local-storage.service';
import { JsonWebTokenInterceptorProvider } from './core/services/helpers/json-web-token-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountService } from './core/services/application/account.service';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    LocalToLocalComponent,
    StepFourComponent,
    LeftnavComponent,
    TopnavComponent,
    FooterComponent,
    SavingsComponent,
    CurrentComponent,
    LoginComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    NgStepperModule,
    BrowserAnimationsModule,
    HttpClientModule         
  ],

  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      AuthService, AuthGuardService, LocalStorageService, AccountService, JsonWebTokenInterceptorProvider, JwtHelperService],
      bootstrap: [AppComponent]
})
export class AppModule { }
