import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { CurrentComponent } from './accounts/current/current.component';
import { SavingsComponent } from './accounts/savings/savings.component';
import { AuthGuardService } from './core/services/guards/auth-guard.service';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { LocalToLocalComponent } from './transfer/own-account/local-to-local/local-to-local.component';

const routes: Routes = [
  {path: '', component: SiteLayoutComponent, 
    children:
    [
      {path: 'login', component: LoginComponent},
    ]},
  {path: '', component: AppLayoutComponent,  canActivate: [AuthGuardService],
    children: 
    [
        {path: 'transfers/ownaccount', 
            children:
              [
                  {path: 'localtolocal', component: LocalToLocalComponent},          
              ]
        },
        {path: 'accounts', 
            children: 
            [
              {path: 'savings', component: SavingsComponent},
              {path: 'current', component: CurrentComponent}                  
            ]}
     ]
  },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
