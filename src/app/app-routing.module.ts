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
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EquipmentListComponent } from './components/equipments/equipment-list/equipment-list.component';
import { AddEquipmentComponent } from './components/equipments/add-equipment/add-equipment.component';
import { EditEquipment2Component } from './components/equipments/edit-equipment2/edit-equipment2.component';
import { BouncehouseListComponent } from './components/bouncehouses/bouncehouse-list/bouncehouse-list.component';
import { AddBouncehouseComponent } from './components/bouncehouses/add-bouncehouse/add-bouncehouse.component';
import { EditBouncehouseComponent } from './components/bouncehouses/edit-bouncehouse/edit-bouncehouse.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/vehicles/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/vehicles/edit-vehicle/edit-vehicle.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent},
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'customers/edit/:id', component: EditCustomerComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'employees/add', component: AddEmployeeComponent},
  { path: 'employees/edit/:id', component: EditEmployeeComponent},
  { path: 'equipments', component: EquipmentListComponent},
  { path: 'equipments/add', component: AddEquipmentComponent},
  { path: 'equipments/edit/:id', component: EditEquipment2Component}, //2nd version/template
  { path: 'bouncehouses', component: BouncehouseListComponent},
  { path: 'bouncehouses/add', component: AddBouncehouseComponent},
  { path: 'bouncehouses/edit/:id', component: EditBouncehouseComponent}, //2nd version/template
  { path: 'vehicles', component: VehicleListComponent},
  { path: 'vehicles/add', component: AddVehicleComponent},
  { path: 'vehicles/edit/:id', component: EditVehicleComponent}, //2nd version/template
  { path: 'events', component: EventListComponent},
  { path: 'events/add', component: AddEventComponent},
  { path: 'events/edit/:id', component: EditEventComponent}, //2nd version/template


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
