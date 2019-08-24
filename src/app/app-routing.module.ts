import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountListComponent } from './account-list/account-list.component';
import { RegisterComponent } from './register/register.component';
import { ReportingComponent } from './reporting/reporting.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account_list', component: AccountListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reporting', component: ReportingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



