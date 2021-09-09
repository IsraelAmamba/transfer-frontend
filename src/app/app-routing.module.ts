import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalToLocalComponent } from './transfer/own-account/local-to-local/local-to-local.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'localtolocal', component: LocalToLocalComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
