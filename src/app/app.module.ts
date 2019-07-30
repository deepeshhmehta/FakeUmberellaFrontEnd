import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerRainListComponent } from './customer-rain-list/customer-rain-list.component';
import { CustomerTopEmployeeComponent } from './customer-top-employee/customer-top-employee.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddEditComponent } from './customer-add-edit/customer-add-edit.component';

import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerRainListComponent,
    CustomerTopEmployeeComponent,
    CustomerAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
