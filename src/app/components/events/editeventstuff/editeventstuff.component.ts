import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { EquipmentsService } from 'src/app/services/equipments.service';
import { EventsService } from 'src/app/services/events.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-editeventstuff',
  templateUrl: './editeventstuff.component.html',
  styleUrls: ['./editeventstuff.component.css']
})
export class EditeventstuffComponent implements OnInit {

  //Get all event details for the current event to populate the form
  eventDetails: any = {};
  intEventID: any;

  //Dates
  strEventStartDate: string;
  strEventEndDate: string;

  //Bounce Houses
  availableBounceHouses: any[] = [];
  availableCombos: any[] = [];
  availableSlides: any[] = [];
  availableFunAndGames: any[] = [];
  availableMidwayRushGames: any[] = [];
  availableObstacles: any[] = [];

  //Vehicles
  availableVehicles: any[] = [];

  //Equipment
  availableEquipment: any[] = [];

  //Employees
  availableEmployees: any[] = [];

  //Add requests
  addVehicleRequest = {
    intEventID: '',
    intVehicleID: ''
  }

  addEquipmentRequest = {
    intEventID: '',
    intEquipmentID: ''
  }

  addBounceHouseRequest = {
    intEventID: '',
    intBounceHouseID: ''
  }

  addEmployeeRequest = {
    intEventID: '',
    intEmployeeID: ''
  }

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


              //-------------------------------//
              //  Get available bouncehouses
              //-------------------------------//
              this.eventsService.getAvailableBounceHouses(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableBounceHouses = response;
                  console.log(this.availableBounceHouses);
                }
              });

              //-------------------------------//
              //  Get available combos
              //-------------------------------//
              this.eventsService.getAvailableCombos(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableCombos = response;
                }
              });

              //-------------------------------//
              //  Get available slides
              //-------------------------------//
              this.eventsService.getAvailableSlides(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableSlides = response;
                }
              });

              //-------------------------------//
              //  Get available rushes
              //-------------------------------//
              this.eventsService.getAvailableRushes(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableMidwayRushGames = response;
                }
              });

              //-------------------------------//
              //  Get available games
              //-------------------------------//
              this.eventsService.getAvailableGames(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableFunAndGames = response;
                }
              });

              //-------------------------------//
              //  Get available obstacles
              //-------------------------------//
              this.eventsService.getAvailableObstacles(this.eventDetails.dteEventStartDate, this.eventDetails.dteEventEndDate)
              .subscribe({
                next: (response) => {
                  this.availableObstacles = response;
                }
              });

              //-------------------------------//
              //  Get available vehicles
              //-------------------------------//
              this.vehiclesService.getAllVehicles()
              .subscribe({
                next: (response) => {
                  this.availableVehicles = response;
                }
              });

              //-------------------------------//
              //  Get available equipment
              //-------------------------------//
              this.equipmentsService.getAllEquipments()
              .subscribe({
                next: (response) => {
                  this.availableEquipment = response;
                }
              });


              //-------------------------------//
              //  Get available employees
              //-------------------------------//
              this.employeesService.getAllEmployees()
              .subscribe({
                next: (response) => {
                  this.availableEmployees = response;
                }
              });


            }
          });
        }
      }
    });
  } //NgOnInit ends here

  //---------------------------------//
  //          ADD METHODS
  //---------------------------------//

    //Move a vehicle from the available vehicles table to the current event then refresh the component
    addEventVehicle(intVehicleID: string) {
      this.addVehicleRequest.intEventID = this.intEventID;
      this.addVehicleRequest.intVehicleID = intVehicleID;
      this.eventsService.addEventVehicle(this.addVehicleRequest)
      .subscribe({
        next: (response) => {
          alert('Vehicle Added');
          this.ngOnInit();
        }
      });
    }

    //Add equipment to an event
    addEventEquipment(intEquipmentID: string) {
      this.addEquipmentRequest.intEventID = this.intEventID;
      this.addEquipmentRequest.intEquipmentID = intEquipmentID;
      this.eventsService.addEventEquipment(this.addEquipmentRequest)
      .subscribe({
        next: (response) => {
          alert('Equipment Added');
          this.ngOnInit();
        }
      });
    }

    //Add equipment to an event
    addEventBounceHouse(intBounceHouseID: string) {
      this.addBounceHouseRequest.intEventID = this.intEventID;
      this.addBounceHouseRequest.intBounceHouseID = intBounceHouseID;
      this.eventsService.addEventBounceHouse(this.addBounceHouseRequest)
      .subscribe({
        next: (response) => {
          alert('Bounce House Added');
          this.ngOnInit();
        }
      });
    }


    //Add equipment to an event
    addEventEmployee(intEmployeeID: string) {
      this.addEmployeeRequest.intEventID = this.intEventID;
      this.addEmployeeRequest.intEmployeeID = intEmployeeID;
      this.eventsService.addEventEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (response) => {
          alert('Employee Added');
          this.ngOnInit();
        }
      });
    }

}
