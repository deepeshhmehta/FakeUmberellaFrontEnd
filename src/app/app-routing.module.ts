import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component'
import {CustomerRainListComponent} from './customer-rain-list/customer-rain-list.component'
import {CustomerTopEmployeeComponent} from './customer-top-employee/customer-top-employee.component'
import {CustomerAddEditComponent} from './customer-add-edit/customer-add-edit.component'


const routes: Routes = [
{
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customer-rain-list',
    component: CustomerRainListComponent
  },
  {
    path: 'customer-top-employee',
    component: CustomerTopEmployeeComponent
  },
  {
    path: 'customer-add-edit',
    component: CustomerAddEditComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
