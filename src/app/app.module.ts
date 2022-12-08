import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AngularFireModule } from "@angular/fire/compat";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { InventoryComponent } from './inventory/inventory.component';
import { BounceHouseCreateComponent } from './bounce-house-create/bounce-house-create.component';
import { MatTableModule } from '@angular/material/table'  ;
import { ViewInflatablesComponent } from './view-inflatables/view-inflatables.component';
import { MatSortModule} from '@angular/material/sort';
import { EditInflatablesComponent } from './edit-inflatables/edit-inflatables.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { AddEquipmentComponent } from './components/equipments/add-equipment/add-equipment.component';
import { EquipmentListComponent } from './components/equipments/equipment-list/equipment-list.component';
import { EditEquipment2Component } from './components/equipments/edit-equipment2/edit-equipment2.component';
import { AddBouncehouseComponent } from './components/bouncehouses/add-bouncehouse/add-bouncehouse.component';
import { BouncehouseListComponent } from './components/bouncehouses/bouncehouse-list/bouncehouse-list.component';
import { EditBouncehouseComponent } from './components/bouncehouses/edit-bouncehouse/edit-bouncehouse.component';
import { AddVehicleComponent } from './components/vehicles/add-vehicle/add-vehicle.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list.component';
import { EditVehicleComponent } from './components/vehicles/edit-vehicle/edit-vehicle.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddEvent2Component } from './components/events/add-event2/add-event2.component';
import { AddEventvehicleComponent } from './components/events/add-eventvehicle/add-eventvehicle.component';
import { AddEventequipmentComponent } from './components/events/add-eventequipment/add-eventequipment.component';
import { PickDateComponent } from './pick-date/pick-date.component';
import { Addevent3Component } from './components/events/addevent3/addevent3.component';
import { Editevent3Component } from './components/events/editevent3/editevent3.component';
import { EditeventstuffComponent } from './components/events/editeventstuff/editeventstuff.component';
import { RemoveeventstuffComponent } from './components/events/removeeventstuff/removeeventstuff.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    InventoryComponent,
    BounceHouseCreateComponent,
    ViewInflatablesComponent,
    EditInflatablesComponent,
    ViewEventsComponent,
    EditEventsComponent,
    ViewEquipmentComponent,
    EditEquipmentComponent,
    CreateEquipmentComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    AddEquipmentComponent,
    EquipmentListComponent,
    EditEquipment2Component,
    AddBouncehouseComponent,
    BouncehouseListComponent,
    EditBouncehouseComponent,
    AddVehicleComponent,
    VehicleListComponent,
    EditVehicleComponent,
    EventListComponent,
    EditEventComponent,
    AddEventComponent,
    AddEvent2Component,
    AddEventvehicleComponent,
    AddEventequipmentComponent,
    PickDateComponent,
    Addevent3Component,
    Editevent3Component,
    EditeventstuffComponent,
    RemoveeventstuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ30nJV86YNwb4tJugNk110dZenMffLBU",
      authDomain: "vernal-design-313916.firebaseapp.com",
      databaseURL: "https://vernal-design-313916-default-rtdb.firebaseio.com",
      projectId: "vernal-design-313916",
      storageBucket: "vernal-design-313916.appspot.com",
      messagingSenderId: "174449647637",
      appId: "1:174449647637:web:7c1aa6ce3d5571781d2e1c",
      measurementId: "G-9GJMSFZ79R"
    }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
