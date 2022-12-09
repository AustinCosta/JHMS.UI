import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerRequest: any = {
    strFirstName: '',
    strLastName: '',
    strAddress: '',
    strCity: '',
    strState: '',
    strZip: '',
    strPhoneNumber: '',
    strEmail: '',
  };

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {

  }

  addCustomer() {
    this.customersService.addCustomer(this.addCustomerRequest)
    .subscribe({
      next: (customer) => {
        this.router.navigate(['customers']);
      }
    });
  }

}
