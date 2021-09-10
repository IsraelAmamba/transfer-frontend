import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './accounts/current/current.component';
import { SavingsComponent } from './accounts/savings/savings.component';
import { LocalToLocalComponent } from './transfer/own-account/local-to-local/local-to-local.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'transfers', children: [
    { path: 'ownaccount', children: [
      {path: 'localtolocal', component: LocalToLocalComponent}
    ] 
  },
  ]},
  {path: 'accounts', children:[
    {path: 'savings', component: SavingsComponent},
    {path: 'current', component: CurrentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
