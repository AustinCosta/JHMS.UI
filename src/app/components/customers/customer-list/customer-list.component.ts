import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: any[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getAllCustomers()
    .subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
