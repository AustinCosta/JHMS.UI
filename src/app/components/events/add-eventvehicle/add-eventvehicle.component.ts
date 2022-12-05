import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-eventvehicle',
  templateUrl: './add-eventvehicle.component.html',
  styleUrls: ['./add-eventvehicle.component.css']
})
export class AddEventvehicleComponent implements OnInit {

  availableVehicles: any[] = [];
  intEventID: any;

  addVehicleRequest = {
    intEventID: '',
    intVehicleID: ''
  }

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const eventID = params.get('id');
        const strStartDate = params.get('strStart');
        const strEndDate = params.get('strEnd');

        //Store event ID to pass later
        this.intEventID = eventID;

        //getAvailableVehicles
        if(eventID)
        {
          if(strStartDate)
          {
            if(strEndDate)
            {
              this.eventsService.getAvailableVehicles(eventID, strStartDate, strEndDate)
              .subscribe({
                next: (response) => {
                  this.availableVehicles = response;
                  console.log(response);
                }
              });
            }
          }
        }
      }
    })
  }

  //Move a vehicle from the available vehicles table to the current event then refresh the component
  addEventVehicle(intVehicleID: string) {
    this.addVehicleRequest.intEventID = this.intEventID;
    this.addVehicleRequest.intVehicleID = intVehicleID;
    this.eventsService.addEventVehicle(this.addVehicleRequest)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

}
