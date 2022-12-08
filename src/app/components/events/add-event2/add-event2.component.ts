import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.css']
})
export class AddEvent2Component implements OnInit {

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
  
  eventStartDate: any = {};
  eventEndDate: any = {};
  customers: any[] = [];
  environmentTypes: any[] = [];

  constructor(private eventsService: EventsService, private router: Router,
    private customersService: CustomersService, private route: ActivatedRoute) { }

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
    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (event) => {
        this.router.navigate(['events']);
      }
    });
  }

}
