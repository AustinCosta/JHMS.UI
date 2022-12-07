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

@Component({
  selector: 'app-pick-date',
  templateUrl: './pick-date.component.html',
  styleUrls: ['./pick-date.component.css']
})
export class PickDateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location,) { }

  dtmDate: Date = new Date();

  dateFormCtrl = new FormControl(new Date());
  daysFormCtrl = new FormControl();

  intDays: number = 1;
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

  ngOnInit(): void {

    if (this.strStart == "") {

      this.strStart = "1995-02-12";
      this.strEnd = "1995-02-12";
  }

  console.log(this.strStart);

  }

  

  onchange(){

    this.intDays = this.daysFormCtrl.value!;
    ////console.log(this.intDays);

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

    this.strStart = moment(this.dtmStart).format('yyyy-MM-DD');
    this.strEnd = moment(this.dtmEnd).format('yyyy-MM-DD');


    console.log(this.strStart);


    //PULL dtmStart for start date
    //PULL dtmEnd for end date
  }

  /////EVERYTHING FOR POPULATING CHECKBOXES
  thisIsMyForm: FormGroup;

  addDays = (date: Date, days: number): Date => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

}


