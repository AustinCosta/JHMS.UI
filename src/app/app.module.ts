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
import {MatSortModule} from '@angular/material/sort';
import { EditInflatablesComponent } from './edit-inflatables/edit-inflatables.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';

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
    AddEventComponent,
    ViewEquipmentComponent,
    EditEquipmentComponent,
    CreateEquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ30nJV86YNwb4tJugNk110dZenMffLBU",
      authDomain: "vernal-design-313916.firebaseapp.com",
      databaseURL: "https://vernal-design-313916-default-rtdb.firebaseio.com",
      projectId: "vernal-design-313916",
      storageBucket: "vernal-design-313916.appspot.com",
      messagingSenderId: "174449647637",
      appId: "1:174449647637:web:092bc08da262e4cd1d2e1c",
      measurementId: "G-81XNEJE3PG"
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
