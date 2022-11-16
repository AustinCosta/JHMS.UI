import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'customers', component: CustomerListComponent},
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'customers/edit/:id', component: EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
