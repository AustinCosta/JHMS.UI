import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-editevent3',
  templateUrl: './editevent3.component.html',
  styleUrls: ['./editevent3.component.css']
})
export class Editevent3Component implements OnInit {

  //Get all event details for the current event to populate the form
  eventDetails: any = {};

  //Add a customer from the customers list to the event
  customers: any[] = [];

  //Add an environment type
  environmentTypes: any[] = [];

  constructor(private eventsService: EventsService, private router: Router,
    private customersService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //Map event details from id in route
    this.route.paramMap.subscribe({
      next: (params) => {
        const eventID = params.get('id');

        if(eventID){
          //getEventDetails from TEvents
          this.eventsService.getEvent(eventID)
          .subscribe({
            next: (response) => {
              this.eventDetails = response[0];
            }
          });
        }
      }
    });


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


  //Edit or Remove the event
  updateEvent() {
    this.eventsService.updateEvent(this.eventDetails.intEventID, this.eventDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['ViewEvents']);
      }
    });
  }

  deleteEvent(intEventID: string) {
    this.eventsService.deleteEvent(intEventID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['ViewEvents']);
      }
    });
  }

}
