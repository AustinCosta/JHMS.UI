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

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
