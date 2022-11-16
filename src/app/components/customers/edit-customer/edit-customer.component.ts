import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerDetails: any = {};

  constructor(private route: ActivatedRoute, private customerSerivce: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const customerID = params.get('id');

        if(customerID) {
          //call api
          this.customerSerivce.getCustomer(customerID)
          .subscribe({
            next: (response) => {
              this.customerDetails = response;
              console.log(response);
            }
          })

        }
      }
    })
  }

  updateCustomer() {
    this.customerSerivce.updateCustomer(this.customerDetails.intCustomerID, this.customerDetails.strCustomerName)
    .subscribe({
      next: (response) => {
        this.router.navigate(['customers']);
      }
    });
  }

}
