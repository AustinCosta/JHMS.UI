import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-addevent3',
  templateUrl: './addevent3.component.html',
  styleUrls: ['./addevent3.component.css']
})
export class Addevent3Component implements OnInit {

  //Data that will be sent in a post to the API to create the event
  addEventRequest: any = {
    strEventType: '',
    intCustomerID: 0,
    intEnvironmentTypeID: 0,
    dteEventStartDate: Date,
    dteEventEndDate: Date,
    strEventName: '',
    strEventStartTime: '',
    strEventEndTime: '',
    strEventSetupTime: '',
    strEventDescription: '',
    intInflatablesNeeded: 0,
    intEmployeesForTheEvent: 0,
    strLocation: '',
  };

  //Add a customer from the customers list to the event
  customers: any[] = [];

  //Add an environment type
  environmentTypes: any[] = [];

  constructor(private eventsService: EventsService, private router: Router,
    private customersService: CustomersService) { }

    //Update the selected dates on the form
    updateDates(){
      this.ngOnInit();
    }

  ngOnInit(): void {

        //populate customers select box
        this.customersService.getAllCustomers()
        .subscribe({
          next: (response) => {
            this.customers = response;
          }
        });

        //populate environment types
        this.eventsService.getEnvironmentTypes()
        .subscribe({
          next: (response) => {
            this.environmentTypes = response;
          }
        });
  }

  addEvent() {
    console.log(this.addEventRequest);
    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (event) => {
        this.router.navigate(['events']);
      }
    });
  }

}
