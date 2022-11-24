import { Component, OnInit } from '@angular/core';
import {  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{



  

  dtmDate: Date = new Date();

  dateFormCtrl = new FormControl(new Date());
  daysFormCtrl = new FormControl();

  intDays: number = 0;
  intDays2: number = 0;

  v = 0;


  dtmStart: Date = new Date(); //VARIABLE NEEDED FOR strStartDate
  dtmEnd: Date = new Date(); //VARIABLE NEEDED FOR strEndDate

  newDate = this.dateFormCtrl.value!;

  addDays = (date: Date, days: number): Date => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  form: FormGroup;
  ordersData = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  berichten = [
    {messageId: 123},
    {messageId: 234},
    {messageId: 345},
    {messageId: 456},
    {messageId: 567}
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.get('orders') as FormArray).push(control);
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v: any, i: number) => (v ? this.ordersData[i].id : null))
      .filter((v: null) => v !== null);
    console.log(selectedOrderIds);
  }

  ngOnInit(): void {

    this.addCheckboxes();
    
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


      //PULL dtmStart for start date
      //PULL dtmEnd for end date

      this.addCheckboxes();


    }



}
