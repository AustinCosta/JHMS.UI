import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EquipmentsService } from 'src/app/services/equipments.service';
import { EventsService } from 'src/app/services/events.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-removeeventstuff',
  templateUrl: './removeeventstuff.component.html',
  styleUrls: ['./removeeventstuff.component.css']
})
export class RemoveeventstuffComponent implements OnInit {

   //Get all event details for the current event to populate the form
   eventDetails: any = {};
   intEventID: any;

   //Dates
   strEventStartDate: string;
   strEventEndDate: string;

   //TEventBounceHouses
   eventBounceHouses: any[] = [];
   eventCombos: any[] = [];
   eventSlides: any[] = [];
   eventFunAndGames: any[] = [];
   eventMidwayRushGames: any[] = [];
   eventObstacles: any[] = [];

   //TEventEmployees
   eventEmployees: any[] = [];

   //TEventEquipments
   eventEquipments: any[] = [];

   //TEventVehicles
   eventVehicles: any[] = [];


  constructor(private eventsService: EventsService, private router: Router, private vehiclesService: VehiclesService,
    private route: ActivatedRoute, private equipmentsService: EquipmentsService
    , private employeesService: EmployeesService) { }

  ngOnInit(): void {

    //Map event details from id in route
    this.route.paramMap.subscribe({
      next: (params) => {
        const eventID = params.get('id');
        //Store event ID to pass later
        this.intEventID = eventID;

        if(eventID){

          //getEventDetails from TEvents
          this.eventsService.getEvent(eventID)
          .subscribe({
            next: (response) => {
              this.eventDetails = response[0];

          //getEventBouncehouses from TEventBouncehouses (join) returns intBounceHouseID + strBounceHouseName
          this.eventsService.getEventBounceHouses2(eventID)
          .subscribe({
            next: (response) => {
              this.eventBounceHouses = response;
            }
          });

          //getEventCombos
          this.eventsService.getEventCombos(eventID)
          .subscribe({
            next: (response) => {
              this.eventCombos = response;
            }
          });

          //getEventSlides
          this.eventsService.getEventSlides(eventID)
          .subscribe({
            next: (response) => {
              this.eventSlides = response;
            }
          });


          //getEventFunAndGames
          this.eventsService.getEventGames(eventID)
          .subscribe({
            next: (response) => {
              this.eventFunAndGames = response;
            }
          });

          //getEventMidwayRushGames
          this.eventsService.getEventRushes(eventID)
          .subscribe({
            next: (response) => {
              this.eventMidwayRushGames = response;
            }
          });


          //getEventObstacles
          this.eventsService.getEventObstacles(eventID)
          .subscribe({
            next: (response) => {
              this.eventObstacles = response;
            }
          });

          //-------------------------------//
          //  Get available vehicles
          //-------------------------------//
          this.eventsService.getAllEventVehicles(eventID)
          .subscribe({
            next: (response) => {
              this.eventVehicles = response;
            }
          });

          //-------------------------------//
          //  Get available equipment
          //-------------------------------//
          this.eventsService.getAllEventEquipments(eventID)
          .subscribe({
            next: (response) => {
              this.eventEquipments = response;
            }
          });

          //-------------------------------//
          //  Get available employees
          //-------------------------------//
          this.eventsService.getAllEventEmployees(eventID)
          .subscribe({
            next: (response) => {
              this.eventEmployees = response;
            }
          });





            }
          });
        }
      }
    });

  }//NG On init ends here

  removeBounceHouse(intEventBounceHouseID: string) {
    this.eventsService.removeEventBounceHouse(intEventBounceHouseID)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

  removeEventEmployee(intEventEmployeeID: string) {
    this.eventsService.removeEventEmployee(intEventEmployeeID)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

  removeEventEquipment(intEventEquipmentID: string) {
    this.eventsService.removeEventEquipment(intEventEquipmentID)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

  removeEventVehicle(intEventVehicleID: string) {
    this.eventsService.removeEventVehicle(intEventVehicleID)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }

}
