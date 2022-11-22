import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BounceHouseCreateComponent } from './bounce-house-create/bounce-house-create.component';
import { ViewInflatablesComponent } from './view-inflatables/view-inflatables.component';
import { EditInflatablesComponent } from './edit-inflatables/edit-inflatables.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent},
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'customers/edit/:id', component: EditCustomerComponent},
  { path: 'Home', component: InventoryComponent},
  { path: 'CreateInflatable', component: BounceHouseCreateComponent},
  { path: 'ViewInflatables', component: ViewInflatablesComponent},
  { path: 'ViewInflatables/edit/:id', component:EditInflatablesComponent},
  { path: 'ViewEvents', component:ViewEventsComponent},
  { path: 'ViewEvents/edit/:id', component:EditEventsComponent},
  { path: 'addEvent', component:AddEventComponent},
  { path: 'ViewInflatables/type/:type', component: ViewInflatablesComponent},
  { path: 'ViewEquipment', component: ViewEquipmentComponent},
  { path: 'ViewEquipment/edit/:id', component: EditEquipmentComponent},
  { path: 'CreateEquipment', component: CreateEquipmentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
