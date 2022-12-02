import { Component, ViewChild, OnInit} from '@angular/core';
import {FormArray, FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BouncehousesService } from '../services/bouncehouses.service';
import { VehiclesService } from '../services/vehicles.service';
import { AddEvent2Component } from '../components/events/add-event2/add-event2.component';
import { CustomersService } from '../services/customers.service';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{


  constructor(private formBuilder: FormBuilder, private bounceHouseService: BouncehousesService, private vehiclesService: VehiclesService, private customersService: CustomersService, private eventsService: EventsService,  private router: Router) {};
  //////////// HERE IS EVERYTHING FOR DATES
  dtmDate: Date = new Date();

  dateFormCtrl = new FormControl(new Date());
  daysFormCtrl = new FormControl();

  intDays: number = 0;
  intDays2: number = 0;


  tempObject: Object = new Object();

  v = 0;


  arrSelected = [0];

  dtmStart: Date = new Date(); //VARIABLE NEEDED FOR strStartDate
  dtmEnd: Date = new Date(); //VARIABLE NEEDED FOR strEndDate

  strStart: String = new String(); //STRING VERSION NEEDED FOR API
  strEnd: String = new String(); //STRING VERSION NEEDED FOR API




  newDate = this.dateFormCtrl.value!;

  addDays = (date: Date, days: number): Date => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  bounceHouses2: any = [{
    intBounceHouseTypeID: 0,
    strBounceHouseName: '',
    strDescription: '',
    intEmployeesNeededForSetup: 0,
    intNumberOfStakesRequired: 0,
    intNumberOfBlowersRequired: 0,
    strDateOfLastPurchase: '',
    strURL: '',
    intPurchaseYear: 0
  }];
  arrBounce: any = [];
  arrSlide: any = [];
  arrCombo: any = [];
  arrMidway: any = [];
  arrFun: any = [];
  arrObstacle: any = [];
  vehicles: any[] = [];
  customers: any[] = [];

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




  //Variables for Submit button
  subInflatableCount = 0;
  subEventType = '';
  subCustomerID = 0;
  subCustomerName = '';
  subEnvironmentTypeID = 0;
  subEventStartDate: Date;
  subEventEndDate: Date;
  subEventName = '';
  subEventStartTime = '';
  subEventEndTime = '';
  subEventSetupTime = '';
  subEventDescription = '';
  subInflatablesNeeded = 0;
  subEmployeesForTheEvent = 0;
  subLocation = '';
  subEnvironmentTypeString = '';


  //Info for Customers to be added
  addCustomerRequest: any = {
    strFirstName: '',
    strLastName: '',
    strAddress: '',
    strCity: '',
    strState: '',
    strZip: '',
    strEmail: '',
  };

  custFirst = '';
  custLast = '';
  custAddress = '';
  custCity = '';
  custState = '';
  custZip = ''
  custEmail = '';
  arrNames: any = [];



  

  ngOnInit(): void {

    
    this.bounceHouseService.getAllBounceHouses()
    .subscribe({
      next: (bounceHouses) => {
        this.bounceHouses2 = bounceHouses;

        for (var i = 0; i < 50; i++) { 
      
          if(this.bounceHouses2[i]?.intBounceHouseTypeID == 1) {
    
            this.arrBounce.push(this.bounceHouses2[i]);
            console.log(String(i) + " iteration")
            console.log(this.arrBounce);

          } else if (this.bounceHouses2[i]?.intBounceHouseTypeID == 2){
    
            this.arrSlide.push(this.bounceHouses2[i]);
    
          } else if (this.bounceHouses2[i]?.intBounceHouseTypeID == 3){
    
            this.arrCombo.push(this.bounceHouses2[i]);
    
          } else if (this.bounceHouses2[i]?.intBounceHouseTypeID == 4){
    
            this.arrMidway.push(this.bounceHouses2[i]);
    
          } else if (this.bounceHouses2[i]?.intBounceHouseTypeID == 5){
    
            this.arrFun.push(this.bounceHouses2[i]);
    
          } else if (this.bounceHouses2[i]?.intBounceHouseTypeID == 6){
    
            this.arrObstacle.push(this.bounceHouses2[i]);
            console.log(String(i) + " iteration")
            console.log(this.arrObstacle);
    
          }else {
            
           // alert("NOT RUNNING");
          }

          // this.arrBounce.shift();
          // this.arrSlide.shift();
          // this.arrCombo.shift();
          // this.arrMidway.shift();
          // this.arrFun.shift();
          // this.arrObstacle.shift();




        }

      },
      error: (response) => {
        console.log(response);
      }
    });

    this.vehiclesService.getAllVehicles()
    .subscribe({
      next: (vehicles) => {
        this.vehicles = vehicles;
      },
      error: (response) => {
        console.log(response);
      }
    });

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
    onchange(){

      this.intDays = this.daysFormCtrl.value!;
      console.log(this.intDays);

      this.newDate = this.dateFormCtrl.value!;
      this.dtmStart = new Date((this.dateFormCtrl.value!)); //gives dtmStart - date object
      this.dtmStart = this.addDays(this.dtmStart, 1); //corrects the -1 discrepancy between date picker and irl
      this.dtmEnd = new Date();

      if (this.intDays == null) {
        this.intDays = 0;
      }

      if (this.intDays == 0){
        this.dtmEnd = this.dtmStart;
      }else if (this.intDays == 1){
        this.dtmEnd = this.addDays(this.dtmStart, 1);
      }else if (this.intDays == 2){
        this.dtmEnd = this.addDays(this.dtmStart, 2);
      }else if (this.intDays == 3){
        this.dtmEnd = this.addDays(this.dtmStart, 3);
      }else if (this.intDays == 4){
        this.dtmEnd = this.addDays(this.dtmStart, 4);
      }else if (this.intDays == 5){
        this.dtmEnd = this.addDays(this.dtmStart, 5);
      }

      console.log('Start Date is ');
      console.log(this.dtmStart);
      console.log('End date is ');
      console.log(this.dtmEnd );

      this.strStart = String(this.dtmStart);
      this.strEnd = String(this.dtmEnd);


      //PULL dtmStart for start date
      //PULL dtmEnd for end date
    }

    /////EVERYTHING FOR POPULATING CHECKBOXES
    thisIsMyForm: FormGroup


    checkBoxes () {

      this.arrSelected = [0];

      for (let i = 0; i < 30; i++) {
        //Bounce Houses
        try {
          const tempObject2 = document.getElementById(
            'bounceCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              const value = tempObject2?.value;

              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }

        //Giant Slides
        try {
          const tempObject2 = document.getElementById(
            'slideCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              alert(tempObject2.value);
              const value = tempObject2?.value;

              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }

        //Combos
        try {
          const tempObject2 = document.getElementById(
            'comboCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              const value = tempObject2?.value;
 
              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }

        //Midway Fun & GAmes
        try {
          const tempObject2 = document.getElementById(
            'midwayCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              const value = tempObject2?.value;

              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }


        //Fun & Games
        try {
          const tempObject2 = document.getElementById(
            'funCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              const value = tempObject2?.value;

              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }

        //Obstacles
        try {
          const tempObject2 = document.getElementById(
            'obstacleCheck' + String(i)
          ) as HTMLInputElement;
            if (tempObject2.checked == true){
              const value = tempObject2?.value;

              this.arrSelected.push(Number(value));
            }
        } catch (error) {
          //console.log(error)
        }
        


    }

    this.arrSelected.shift();

    


    for (var i = 0; i < this.arrSelected.length; i++) { console.log(this.arrSelected[i]) }



    };

    onSubmit(){

        //Variables for Submit button

        //Event Type Input
        try {
          const tempObject2 = document.getElementById(
            "input-type" 
          ) as HTMLInputElement;
              this.subEventType = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //CustomerID
        try {
          const tempObject2 = document.getElementById(
            "input-custName" 
          ) as HTMLInputElement;
              this.subCustomerName = tempObject2.value;

              this.arrNames = this.subCustomerName.split(" ");

              this.custFirst = this.arrNames[0];
              this.custLast = this.arrNames[1];



        } catch (error) {
          //console.log(error)
        }

        //logic for returning customers
        for (var i = 0; i < 1000; i++) { 
      
          if(this.customers[i]?.strCustomerName === this.subCustomerName ) {
    
            this.subCustomerID = this.customers[i]?.intCustomerID;

          }else {

            this.subCustomerID = 0;
          }
        
        }

        //Enviornment Type ID
        try {
          const tempObject2 = document.getElementById(
            "input-envType" 
          ) as HTMLInputElement;

            this.subEnvironmentTypeString = tempObject2.value;

            if (this.subEnvironmentTypeString == 'Outdoor On Grass'){
              this.subEnvironmentTypeID =1;
            }else if (this.subEnvironmentTypeString == 'Outdoor On Pavement') {
              this.subEnvironmentTypeID =2;
            }else if (this.subEnvironmentTypeString == 'Indoor In Gym'){
              this.subEnvironmentTypeID = 3;
            }else {
              this.subEnvironmentTypeID = 1;
            }

              
        } catch (error) {
          //console.log(error)
        }

        //start and end dates
        this.subEventStartDate = this.dtmStart;
        this.subEventEndDate = this.dtmEnd;

        //Event Name
        try {
          const tempObject2 = document.getElementById(
            "input-name" 
          ) as HTMLInputElement;
              this.subEventName = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }


        //Start Time
        try {
          const tempObject2 = document.getElementById(
            "input-startTime" 
          ) as HTMLInputElement;
              this.subEventStartTime = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //End time
        try {
          const tempObject2 = document.getElementById(
            "input-endTime" 
          ) as HTMLInputElement;
              this.subEventEndTime = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }


        //Setup time
        try {
          const tempObject2 = document.getElementById(
            "input-setupTime" 
          ) as HTMLInputElement;
              this.subEventSetupTime = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //Description
        try {
          const tempObject2 = document.getElementById(
            "input-descript" 
          ) as HTMLInputElement;
              this.subEventDescription = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //Location
        this.subLocation = '';
        try {
          const tempObject2 = document.getElementById(
            "input-address" 
          ) as HTMLInputElement;
              this.subLocation = tempObject2.value;
              this.custAddress = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //City
        try {
          const tempObject2 = document.getElementById(
            "input-city" 
          ) as HTMLInputElement;
              this.subLocation += (', ' + tempObject2.value);
              this.custCity = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //State
        try {
          const tempObject2 = document.getElementById(
            "input-state" 
          ) as HTMLInputElement;
            this.subLocation += (', ' + tempObject2.value);
            this.custState = tempObject2.value;
        } catch (error) {
          //console.log(error)
        }

        //Num inflatables
        for (var val of this.arrBounce) {
          this.subInflatableCount += 1;
        }
        for (var val of this.arrSlide) {
          this.subInflatableCount += 1;
        }
        for (var val of this.arrCombo) {
          this.subInflatableCount += 1;
        }
        for (var val of this.arrMidway) {
          this.subInflatableCount += 1;
        }
        for (var val of this.arrFun) {
          this.subInflatableCount += 1;
        }
        for (var val of this.arrObstacle) {
          this.subInflatableCount += 1;
        }

      //Employees
      try {
        const tempObject2 = document.getElementById(
          "input-staff" 
        ) as HTMLInputElement;
          this.subEmployeesForTheEvent = Number(tempObject2.value);
      } catch (error) {
        //console.log(error)
      }

      //Cust Email
      try {
        const tempObject2 = document.getElementById(
          "input-custEmail" 
        ) as HTMLInputElement;
          this.custEmail = tempObject2.value;
      } catch (error) {
        //console.log(error)
      }

      //Cust Zip
      try {
        const tempObject2 = document.getElementById(
          "input-zip" 
        ) as HTMLInputElement;
          this.custZip = tempObject2.value;
          this.subLocation += (' ' + tempObject2.value);
      } catch (error) {
        //console.log(error)
      }

      console.log("Event Type: " + this.subEventType);
      console.log("Customer ID: " + this.subCustomerID);
      console.log("Customer Name: " + this.subCustomerName);
      console.log("Environment Type ID: " + this.subEnvironmentTypeID);
      console.log("Event Start Date: " + this.subEventStartDate);
      console.log("End Date: " + this.subEventEndDate);
      console.log("Event Name: " + this.subEventName);
      console.log("Start Time: " + this.subEventStartTime);
      console.log("Setup Time: " + this.subEventSetupTime);
      console.log("End Time: " + this.subEventEndTime);
      console.log("Description: " + this.subEventDescription);
      console.log("Inflatables Needed " + this.subInflatableCount);
      console.log("Employees Needed: " + this.subEmployeesForTheEvent);
      console.log("Location: " + this.subLocation);
      console.log("  ");
      console.log("Customer First Name is: " + this.custFirst);
      console.log("Customer Last Name is: " + this.custLast);
      console.log("Customer address is: " + this.custAddress);
      console.log("Customer city is: " + this.custCity);
      console.log("Customer state is: " + this.custState);
      console.log("Customer zip is: " + this.custZip);
      console.log("Customer email is: " + this.custEmail);
      console.log()

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
