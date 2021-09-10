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
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    NgStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
