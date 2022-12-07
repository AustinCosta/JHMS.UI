import { Component, ViewChild, OnInit} from '@angular/core';
import {FormArray, FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BouncehousesService } from '../services/bouncehouses.service';
import { EventsService } from '../services/events.service';
import { VehiclesService } from '../services/vehicles.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common'; 
import { TransitionCheckState } from '@angular/material/checkbox';
import { ThisReceiver } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css'],
  providers: [DatePipe]
})
export class EditEventsComponent implements OnInit{


  constructor(private formBuilder: FormBuilder, private bounceHouseService: BouncehousesService, private vehiclesService: VehiclesService,
     private eventsService: EventsService, private route: ActivatedRoute, private location: Location, private datePipe: DatePipe, private customersService: CustomersService, private router: Router) {};
  //////////// HERE IS EVERYTHING FOR DATES
  dtmDate: Date = new Date();

  dateFormCtrl = new FormControl(new Date());
  daysFormCtrl = new FormControl();

  intDays: number = 0;
  intDays2: number = 0;

  intLength = 0;

  intDays3: number = 0;

  chkEventID = 0;

  intTime = 0;
  strTimeBuffer = '';
  strTimeBuffer2 = '';

  dteStartBuffer: Date;
  dteEndBuffer: Date;


  tempObject: Object = new Object();

  v = 0;


  arrSelected = [0];

  dtmStart: Date = new Date(); //VARIABLE NEEDED FOR strStartDate
  dtmEnd: Date = new Date(); //VARIABLE NEEDED FOR strEndDate

  strStart: String = new String(); //STRING VERSION NEEDED FOR API
  strEnd: String = new String(); //STRING VERSION NEEDED FOR API

  events: any = [];
  events2: any = [];

  intEventID = 0;
  strEventType = '';
  strEventType2 = 0;
  strEnvironmentType = '';
  intCustomerID = 0;
  intEnvironmentTypeID = 0;
  dteEventStartDate = '';
  dteEventEndDate = '';
  strEventName = '';
  strEventStartTime = '';
  strEventEndTime = '';
  strEventSetupTime = '';
  strEventDescription = '';
  intInflatablesNeeded = 0;
  intEmployeesForTheEvent = 0;
  strLocation = "";

  arrLocation: any = [];
  arrState: any = [];

  arrStart: any = [];
  arrEnd: any[];

  availableBounceHouses: any[] = [];
  usedBounceHouses: any[] = [];
  arrBuffer: any = [];
  arrBuffer2: any = [];
  arrBuffer3: any = [];
  arrBuffer4: any = [];
  arrBuffer5: any = [];

  arrStartTime: any = [];
  arrEndTime: any = [];
  arrSetupTime: any = [];


  strAddress = "";
  strCity = "";
  strState1 = "";
  strState2 = "";
  strZip = "";

  arrBounceBuffer: any [] = [];


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
    intPurchaseYear: 0,
    strStatus: ""
  }];

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

  strFlooringType = '';

  customers: any[] = [];
  arrBounce: any = [];
  arrSlide: any = [];
  arrCombo: any = [];
  arrMidway: any = [];
  arrFun: any = [];
  arrObstacle: any = [];
  vehicles: any[] = [];
  // arrObstacle: any = [{
  //   intBounceHouseID: 0,
  //   intBounceHouseTypeID: 0,
  //   strBounceHouseName: '',
  //   strDescription: '',
  //   intEmployeesNeededForSetup: 0,
  //   intNumberOfStakesRequired: 0,
  //   intNumberOfBlowersRequired: 0,
  //   strDateOfLastPurchase: '',
  //   strURL: '',
  //   intPurchaseYear: 0
  // }];
  

  ngOnInit(): void {


    this.customersService.getAllCustomers()
    .subscribe({
      next: (response) => {
        this.customers = response;
      }
    });


    this.route.paramMap.subscribe({
      next: (params) =>{
      const eventID = params.get('id');
      this.chkEventID = Number(eventID);

      //alert(this.intInflatableTypeID);
      }})


    this.eventsService.getAllEventBounceHouses(String(this.chkEventID))
    .subscribe({
      next: (response) => {
        this.usedBounceHouses = response;
        ////////console.log(response);
        //////console.log("here");
        //////console.log(this.usedBounceHouses);


          
      this.usedBounceHouses.forEach((element, index) => {
        // 👇️ one 0, two 1, three 2
        ////////console.log(element, index);


        //////console.log("ASDasd");

        //////console.log(this.usedBounceHouses[index]?.intBounceHouseID)

        this.arrBuffer.push(this.usedBounceHouses[index]?.intBounceHouseID);

      })

      this.eventsService.getEvent(String(this.chkEventID))
      .subscribe({
        next: (events) => {
          this.events = events;
  
          //////console.log(this.events);
  
          for (var i = 0; i < 100; i++) { 
  
            if (this.events[i]?.intEventID == this.chkEventID){
  
  
              this.intEventID = this.events[i]?.intEventID;
              this.strEventType = this.events[i]?.strEventType;
              this.intCustomerID = this.events[i]?.intCustomerID ;
              this.intEnvironmentTypeID = this.events[i]?.intEnvironmentTypeID;
              this.dteEventStartDate = this.events[i]?.strEventStartDate;
              this.dteEventEndDate = this.events[i]?.strEventEndDate;
              this.strEventName = this.events[i]?.strEventName;
              this.strEventStartTime = this.events[i]?.strEventStartTime;
              this.strEventEndTime = this.events[i]?.strEventEndTime;
              this.strEventSetupTime = this.events[i]?.strEventSetupTime;
              this.strEventDescription = this.events[i]?.strEventDescription;
              this.intInflatablesNeeded = this.events[i]?.intInflatablesNeeded;
              this.intEmployeesForTheEvent = this.events[i]?.intEmployeesForTheEvent;
              this.strLocation = this.events[i]?.strLocation;

              if (this.intEnvironmentTypeID == 1){
                this.strFlooringType = "Outdoor On Grass";
              }else if (this.intEnvironmentTypeID == 2){
                this.strFlooringType = "Outdoor On Pavement";
              }else {
                this.strFlooringType = "Indoor In Gym";
              }
  
              this.arrLocation = (this.strLocation).split(",", 3);


              //console.log(this.dteEventStartDate);
              //console.log(this.dteEventEndDate);

              this.dteStartBuffer = new Date(this.dteEventStartDate);
              this.dteEndBuffer = new Date(this.dteEventEndDate);

              //console.log(this.dteEventStartDate);
              //console.log(this.dteEventEndDate);

              var diff = Math.abs(this.dteEndBuffer.getTime() - this.dteEndBuffer.getTime());
              var diffDays = Math.ceil(diff / (1000 * 3600 * 24));  

              this.intDays3 = diffDays;

              ////console.log(this.intDays3);

              this.dteStartBuffer.setDate(this.dteStartBuffer.getDate());
              ////console.log(this.dteStartBuffer);

              this.dteEventStartDate =  (new Date(this.dteStartBuffer).toISOString().split('T')[0]);

              ////console.log(this.dteStartBuffer); 

              const datePicker = new FormControl(new Date() || this.dteStartBuffer);

              // Send to back with your specific format
              const dateBack: string = moment(this.dteStartBuffer).format('yyyy-MM-DD');

              (this.daysFormCtrl as any) = new FormControl(this.intDays3);
              (this.dateFormCtrl as any) = new FormControl(dateBack);

             // (this.daysFormCtrl.value as any) = this.dteStartBuffer;

              //HH:mm
              //this.strEventStartTime = '';

              
              //////console.log(this.strEventStartTime);
              this.arrStartTime = this.strEventStartTime.split(" ", 2);
              this.strEventStartTime = this.arrStartTime[0];

              if (this.strEventStartTime.length == 4){

                this.strEventStartTime = "0" + this.strEventStartTime;

                this.strTimeBuffer = this.strEventStartTime.substring(0, 2);
                //////console.log(this.strTimeBuffer);

                this.intTime = Number(this.strTimeBuffer);

                if (this.arrStartTime[1] == "a.m."){

                }else {

                  this.intTime += 12;

                  //////console.log(this.intTime);
                  this.strTimeBuffer2 = String(this.intTime);

                  //////console.log(":ehre");
                  //////console.log(this.strTimeBuffer2);

                  this.strEventStartTime = this.strEventStartTime.slice(2);

                  //////console.log(this.strEventStartTime);

                  this.strEventStartTime = this.strTimeBuffer2 + this.strEventStartTime;

                  //////console.log(this.strEventStartTime);

                }
              }


              //////console.log(this.strEventEndTime);
              this.arrEndTime = this.strEventEndTime.split(" ", 2);
              this.strEventEndTime = this.arrEndTime[0];

              if (this.strEventEndTime.length == 4){

                this.strEventEndTime = "0" + this.strEventEndTime;

                this.strTimeBuffer = this.strEventEndTime.substring(0, 2);
                //////console.log(this.strTimeBuffer);

                this.intTime = Number(this.strTimeBuffer);

                if (this.arrEndTime[1] == "a.m."){

                }else {

                  this.intTime += 12;

                  //////console.log(this.intTime);
                  this.strTimeBuffer2 = String(this.intTime);

                  //////console.log(":ehre");
                  //////console.log(this.strTimeBuffer2);

                  this.strEventEndTime = this.strEventEndTime.slice(2);

                  //////console.log(this.strEventEndTime);

                  this.strEventEndTime = this.strTimeBuffer2 + this.strEventEndTime;

                  //////console.log(this.strEventEndTime);

                }
              }
 

              
              ////////console.log(this.strEventSetupTime);
              this.arrSetupTime = this.strEventSetupTime.split(" ", 2);
              this.strEventSetupTime = this.arrSetupTime[0];

              if (this.strEventSetupTime.length == 4){

                this.strEventSetupTime = "0" + this.strEventSetupTime;

                this.strTimeBuffer = this.strEventSetupTime.substring(0, 2);
                ////////console.log(this.strTimeBuffer);

                this.intTime = Number(this.strTimeBuffer);

                if (this.arrSetupTime[1] == "a.m."){

                }else {

                  this.intTime += 12;

                  ////////console.log(this.intTime);
                  this.strTimeBuffer2 = String(this.intTime);

                  ////////console.log(":ehre");
                  ////////console.log(this.strTimeBuffer2);

                  this.strEventSetupTime = this.strEventSetupTime.slice(2);

                  ////////console.log(this.strEventSetupTime);

                  this.strEventSetupTime = this.strTimeBuffer2 + this.strEventSetupTime;

                  ////////console.log(this.strEventSetupTime);

                }
              }
  
              this.strAddress = this.arrLocation[0];
              this.strCity = (this.arrLocation[1].trim());
              this.strState1 = (this.arrLocation[2].trim());
  
              this.arrState = (this.strState1).split(" ", 2);
  
              this.strState2 = this.arrState[0];
              this.strZip = this.arrState[1];
  
  
              //////console.log(this.strAddress);
              //////console.log(this.strCity);
              //////console.log(this.strState2);
              //////console.log(this.strZip);
              //////console.log(this.strEventStartTime);
  
  
  
  
              //////console.log(this.intEventID);
              //////console.log(this.strEventType);
  
  
  
            }
  
  
            ////////console.log(this.dteEventStartDate);
  
            this.arrStart = (this.dteEventStartDate).split("T", 1);
            this.arrEnd = (this.dteEventEndDate).split("T", 1);
  
            this.dteEventEndDate = this.arrEnd[0];
            this.dteEventStartDate = this.arrStart[0];
  
            this.location.replaceState("/ViewEvents/" + this.chkEventID + "/" + this.dteEventStartDate + "/" + this.dteEventEndDate);
  
  
          }
  
        
      
              //Store event ID to pass later
  
              for (let i = 0; i < 50; i++) {
                //Bounce Houses
                try {
                  const tempObject2 = document.getElementById(
                    'bounceCheck' + String(i)
                  ) as HTMLInputElement;
                    if (this.arrBuffer3.includes(tempObject2.value)){
                      tempObject2.disabled = true;
                    }
                } catch (error) {
                  ////////console.log(error)
                }
        
                //Giant Slides
                try {
                  const tempObject2 = document.getElementById(
                    'slideCheck' + String(i)
                  ) as HTMLInputElement;
                  if (this.arrBuffer3.includes(tempObject2.value)){
                    tempObject2.disabled = true;
    
                  }
                } catch (error) {
                  ////////console.log(error)
                }
        
                //Combos
                try {
                  const tempObject2 = document.getElementById(
                    'comboCheck' + String(i)
                  ) as HTMLInputElement;
                  if (this.arrBuffer3.includes(tempObject2.value)){
                    tempObject2.disabled = true;
    
                  }
                } catch (error) {
                  ////////console.log(error)
                }
        
                //Midway Fun & GAmes
                try {
                  const tempObject2 = document.getElementById(
                    'midwayCheck' + String(i)
                  ) as HTMLInputElement;
                  if (this.arrBuffer3.includes(tempObject2.value)){
                    tempObject2.disabled = true;
    
                  }
                } catch (error) {
                  ////////console.log(error)
                }
        
        
                //Fun & Games
                try {
                  const tempObject2 = document.getElementById(
                    'funCheck' + String(i)
                  ) as HTMLInputElement;
                  if (this.arrBuffer3.includes(tempObject2.value)){
                    tempObject2.disabled = true;
    
                  }
                } catch (error) {
                  ////////console.log(error)
                }
        
                //Obstacles
                try {
                  const tempObject2 = document.getElementById(
                    'obstacleCheck' + String(i)
                  ) as HTMLInputElement;
                  if (this.arrBuffer3.includes(tempObject2.value)){
                    tempObject2.disabled = true;
    
                  }
                } catch (error) {
                  ////////console.log(error)
                }
                
        
                
        
            }
  
            //console.log(this.dteEventStartDate);
            //console.log(this.dteEventEndDate);
              
            this.eventsService.getAvailableBounceHouses(String(this.chkEventID), this.dteEventStartDate, this.dteEventEndDate)
            .subscribe({
              next: (response) => {
                this.availableBounceHouses = response;
                ////////console.log(response);
      
                this.availableBounceHouses.forEach((element, index) => {
      
                  this.arrBuffer3.push(this.availableBounceHouses[index]?.intBounceHouseID)
      
      
      
                })
      
              
                //console.log(this.arrBuffer3);
      
      
      
                this.bounceHouseService.getAllBounceHouses()
                .subscribe({
                    next: (bounceHouses) => {
                      this.bounceHouses2 = bounceHouses;
              
                      this.bounceHouses2.strStatus = '';
              
                      //////console.log(this.arrBuffer2[0]);


                      this.usedBounceHouses.forEach((element, index) => {
                        // 👇️ one 0, two 1, three 2
                        ////////console.log(element, index);
                
                
                        ////////console.log("ASDasd");
                
                        ////////console.log(this.usedBounceHouses[index]?.intBounceHouseID)
                
                        this.arrBuffer5.push(this.usedBounceHouses[index]?.intBounceHouseID);
                
                      })
              
                      for (var i = 0; i < 50; i++) { 
              
                        if (this.bounceHouses2[i]?.intBounceHouseTypeID > 0) {

                          if (this.arrBuffer3.includes(this.bounceHouses2[i]?.intBounceHouseID) == false){

                            this.arrBuffer4.push(this.bounceHouses2[i]?.intBounceHouseID);

                           //console.log(this.arrBuffer4);

                          }



              
                            this.arrBounceBuffer.push(this.bounceHouses2[i]?.intBounceHouseID);
              
                            if (this.arrBuffer.includes(this.bounceHouses2[i]?.intBounceHouseID)){
              
                              this.bounceHouses2[i].strStatus = "checked";
                  
                            }else {
                  
                              this.bounceHouses2[i].strStatus = "";
                  
                            }
      
                            if (this.arrBuffer3.includes(this.bounceHouses2[i]?.intBounceHouseID)){
      
                              this.bounceHouses2[i].status = "disabled";
      
      
      
                            }else {
      
                              this.bounceHouses2[i].status = "";
      
      
                            }

                            // //////console.log("ahjuslkdh");
                            // //////console.log(this.usedBounceHouses);
                            // //////console.log(this.arrBuffer5);
                            // //////console.log("aaaaaaaaa");
                            // //////console.log(this.arrBuffer4);



                            for (var j = 0; j < 50; j++) { 

                              

                              if (this.arrBuffer5.includes(this.arrBuffer4[j]))
                                    {

                                      ////////console.log("Number");
                                      ////////console.log(this.arrBuffer4[j]);
                                      delete this.arrBuffer4[j];
                                    }
                            }


                            //console.log(this.arrBuffer4);
                            if (this.arrBuffer4.includes(this.bounceHouses2[i]?.intBounceHouseID)){

                                delete this.bounceHouses2[i];

                            }

                            //console.log(this.bounceHouses2);

                            if (this.usedBounceHouses[i]?.intBounceHouseID > 0) {

                              ////////console.log(this.usedBounceHouses[i]);
                              this.bounceHouses2.push(this.usedBounceHouses[i]);


                            }

                            
                  
              
                        }
                    
                        if(this.bounceHouses2[i]?.intBounceHouseTypeID == 1) {
                  
                          ////////console.log("HEREHRE");
              
                          this.arrBounce.push(this.bounceHouses2[i]);
              
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
                          ////////console.log(String(i) + " iteration")
                          ////////console.log(this.arrObstacle);
                  
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
                      //////console.log(response);
                    }
                  });
              
      
      
      
      
              },
              error: (response) => {
                //////console.log(response);
              }
            });
  
            
                
  
          
        },
        error: (response) => {
          //////console.log(response);
        }
  
        
        
  
  
  
      });



      // this.route.paramMap.subscribe({
      //   next: (params) => {
      //     const eventID = params.get('id');
      //     const strStartDate = params.get('strStart');
      //     const strEndDate = params.get('strEnd');

      //     this.dteEventStartDate = String(params.get('strStart'));
      //     this.dteEventEndDate = String(params.get('strEnd'));

      //     //////console.log(this.chkEventID);
    
      
    


      
    

      
      }







      
    });

    
    

    this.vehiclesService.getAllVehicles()
    .subscribe({
      next: (vehicles) => {
        this.vehicles = vehicles;
      },
      error: (response) => {
        //////console.log(response);
      }
    });





  }
    onchange(){

      this.intDays = this.daysFormCtrl.value!;
      //////console.log(this.intDays);

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

      //////console.log('Start Date is ');
      //////console.log(this.dtmStart);
      //////console.log('End date is ');
      //////console.log(this.dtmEnd );

      this.strStart = String(this.dtmStart);
      this.strEnd = String(this.dtmEnd);


      //PULL dtmStart for start date
      //PULL dtmEnd for end date
    }

    /////EVERYTHING FOR POPULATING CHECKBOXES
    thisIsMyForm: FormGroup

    webData = [
      {name:"BounceHouse 1", id:"1", status: true},
      {name:"BounceHouse 2", id:"2", status: false},
      {name:"BounceHouse 3", id:"3", status: false},
    ];

    webData2 = [
      {name:"Slide 1", id:"4", status: false},
      {name:"Slide 2", id:"5", status: false},
      {name:"Slide 3", id:"6", status: true},
    ];

    webData3 = [
      {name:"combo 1", id:"7", status: true},
      {name:"Combo 2", id:"8", status: false},
      {name:"Combo 3", id:"9", status: true},
    ];

    checkBoxes () {

      this.arrSelected = [0];

      for (let i = 0; i < 50; i++) {
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
          ////////console.log(error)
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
          ////////console.log(error)
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
          ////////console.log(error)
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
          ////////console.log(error)
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
          ////////console.log(error)
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
          ////////console.log(error)
        }
        
        const tempObject3 = document.getElementById(
          "input-name"
        ) as HTMLInputElement;
        this.strEventName = tempObject3.value;

        const tempObject4 = document.getElementById(
          "input-type"
        ) as HTMLInputElement;
        this.strEventType = tempObject4.value;

        if (this.strEventType == "School") {
          this.strEventType2 = 1;
        }else if (this.strEventType == "Gym"){
          this.strEventType2 = 2;
        }else if (this.strEventType == "Church"){
          this.strEventType2 = 3;
        }
        else if (this.strEventType == "Festival"){
          this.strEventType2 = 4;
        }
        else if (this.strEventType == "Private Party"){
          this.strEventType2 = 5;
        }else {
          this.strEventType2 = 6;
        }

        const tempObject5 = document.getElementById(
          "input-descript"
        ) as HTMLInputElement;
        this.strEventDescription = tempObject5.value;

        const tempObject6 = document.getElementById(
          "input-startTime"
        ) as HTMLInputElement;
        this.strEventStartTime = tempObject6.value;

        const tempObject7 = document.getElementById(
          "input-endTime"
        ) as HTMLInputElement;
        this.strEventEndTime = tempObject7.value;

        const tempObject8 = document.getElementById(
          "input-setupTime"
        ) as HTMLInputElement;
        this.strEventSetupTime = tempObject8.value;

        const tempObject9 = document.getElementById(
          "input-flooring"
        ) as HTMLInputElement;
        this.strEnvironmentType = tempObject9.value;

          if (this.strEnvironmentType == "Outdoor On Grass"){
            this.intEnvironmentTypeID = 1;
          }else if (this.strEnvironmentType == "Outdoor On Pavement"){
            this.intEnvironmentTypeID = 2;
          }else {
            this.intEnvironmentTypeID = 3;
          }



        this.intInflatablesNeeded = 1;

        for (let l = 0; l < 50; l++) {

          if (this.arrSelected[l] > 0) {
            this.intInflatablesNeeded += 1;
          }

        }

        const tempObject10 = document.getElementById(
          "input-staff"
        ) as HTMLInputElement;
        this.intEmployeesForTheEvent = Number(tempObject10.value);

        const tempObject11 = document.getElementById(
          "input-address"
        ) as HTMLInputElement;
        this.strLocation = tempObject11.value;

        const tempObject12 = document.getElementById(
          "input-city"
        ) as HTMLInputElement;
        this.strLocation += ", " + tempObject12.value;

        const tempObject13 = document.getElementById(
          "input-state"
        ) as HTMLInputElement;
        this.strLocation += ", " + tempObject13.value;

        const tempObject14 = document.getElementById(
          "input-zip"
        ) as HTMLInputElement;
        this.strLocation += " " + tempObject14.value;


        console.log("Event Type: " + this.strEventType2);
        console.log("Customer ID: " + this.intCustomerID);
        //console.log("Customer Name: " + this.subCustomerName);
        console.log("Environment Type ID: " + this.intEnvironmentTypeID);
        console.log("Event Start Date: " + this.dteEventStartDate);
        console.log("End Date: " + this.dteEventEndDate);
        console.log("Event Name: " + this.strEventName);
        console.log("Start Time: " + this.strEventStartTime);
        console.log("Setup Time: " + this.strEventSetupTime);
        console.log("End Time: " + this.strEventEndTime);
        console.log("Description: " + this.strEventDescription);
        console.log("Inflatables Needed " + this.intInflatablesNeeded);
        console.log("Employees Needed: " + this.intEmployeesForTheEvent);
        console.log("Location: " + this.strLocation);
        console.log("  ");
        // //console.log("Customer First Name is: " + this.custFirst);
        // //console.log("Customer Last Name is: " + this.custLast);
        // //console.log("Customer address is: " + this.custAddress);
        // //console.log("Customer city is: " + this.custCity);
        // //console.log("Customer state is: " + this.custState);
        // //console.log("Customer zip is: " + this.custZip);
        // //console.log("Customer email is: " + this.custEmail);
        //console.log()


          this.addEventRequest.strEventType = String(this.strEventType);
          this.addEventRequest.intCustomerID = this.intCustomerID;
          this.addEventRequest.intEnvironmentTypeID = this.intEnvironmentTypeID;
          this.addEventRequest.dteEventStartDate = this.dteEventStartDate;
          this.addEventRequest.dteEventEndDate = this.dteEventEndDate;
          this.addEventRequest.strEventName = this.strEventName;
          this.addEventRequest.strEventStartTime = this.strEventStartTime;
          this.addEventRequest.strEventEndTime = this.strEventEndTime;
          this.addEventRequest.strEventSetupTime = this.strEventSetupTime;
          this.addEventRequest.strEventDescription = this.strEventDescription;
          this.addEventRequest.intInflatablesNeeded = this.intInflatablesNeeded;
          this.addEventRequest.intEmployeesForTheEvent = this.intEmployeesForTheEvent;
          this.addEventRequest.strLocation = this.strLocation;

    }
    this.arrSelected.shift();

    
    console.log("ljkahsdjlksahd");
    console.log(this.addEventRequest);

    this.addEvent();



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
