import { Component, ViewChild, OnInit} from '@angular/core';
import {FormArray, FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BouncehousesService } from '../services/bouncehouses.service';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit{


  constructor(private formBuilder: FormBuilder, private bounceHouseService: BouncehousesService, private vehiclesService: VehiclesService) {};
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




}
