//This file allows us to manage our material modules in a separate file, but
//still access them via App.module for the entire app
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
