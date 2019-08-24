import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AccountListComponent } from './account-list/account-list.component';
import { RegisterComponent } from './register/register.component';
import { ReportingComponent } from './reporting/reporting.component';
import {HttpClientModule} from '@angular/common/http';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AccountListComponent,
    RegisterComponent,
    ReportingComponent,
    EditAccountComponent,
    AddAccountComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
