import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  //TEvents
  eventDetails: any = {};

  //TEventBounceHouses
  eventBounceHouses: any[] = [];

  //TEventEmployees
  eventEmployees: any[] = [];

  //TEventEnvironmentTypes
  eventEnvironmentTypes: any[] = [];

  //TEventEquipments
  eventEquipments: any[] = [];

  //TEventVehicles
  eventVehicles: any[] = [];

  constructor(private route: ActivatedRoute, private eventsService:
    EventsService, private router: Router) { }

  ngOnInit(): void {
    //Map Event Details
    this.route.paramMap.subscribe({
      next: (params) => {
        const eventID = params.get('id');

        if(eventID) {
          //getEventDetails from TEvents
          this.eventsService.getEvent(eventID)
          .subscribe({
            next: (response) => {
              this.eventDetails = response;
            }
          });

          //getEventBouncehouses from TEventBouncehouses (join) returns intBounceHouseID + strBounceHouseName
          this.eventsService.getAllEventBounceHouses(eventID)
          .subscribe({
            next: (response) => {
              this.eventBounceHouses = response;
            }
          });

          //getEventVehicles from TEventVehicles (join) -- returns intVehicleID + strVehicle
          this.eventsService.getAllEventVehicles(eventID)
          .subscribe({
            next: (response) => {
              this.eventVehicles = response;
            }
          });

          //getEventEquipments from TEventEquipments (join) -- returns intEquipmentID, strEquipmentName, strDescription
          this.eventsService.getAllEventEquipments(eventID)
          .subscribe({
            next: (response) => {
              this.eventEquipments = response;
            }
          });

          //getEventEmployees from TEventEmployees (join) --
          this.eventsService.getAllEventEmployees(eventID)
          .subscribe({
            next: (response) => {
              this.eventEmployees = response;
            }
          });

          //getEventEmployees from TEventEmployees (join) --
          this.eventsService.getAllEventEnvironmentTypes(eventID)
          .subscribe({
            next: (response) => {
              this.eventEnvironmentTypes = response;
            }
          });

        }
      }
    })
  }

  updateEvent() {
    this.eventsService.updateEvent(this.eventDetails.intEventID, this.eventDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['events']);
      }
    });
  }

  deleteEvent(intEventID: string) {
    this.eventsService.deleteEvent(intEventID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['events']);
      }
    });
  }

  removeBounceHouse(intEventBounceHouseID: string) {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventsService.removeEventBounceHouse(intEventBounceHouseID)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

}
