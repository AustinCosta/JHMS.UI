import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BouncehousesService } from '../services/bouncehouses.service';

@Component({
  selector: 'app-edit-inflatables',
  templateUrl: './edit-inflatables.component.html',
  styleUrls: ['./edit-inflatables.component.css']
})
export class EditInflatablesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bounceHouseService: BouncehousesService) { }

  bounceHouses: any = [];
  intInflatableID = 0;
  strName = '';
  intType = '';
  strDescription = '';
  strURL = '';
  intPurchaseYear = 0;
  intEmployees = 0;
  intStakes = 0;
  intBlowers = 0;

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) =>{
      const inflatableID = params.get('id');
      this.intInflatableID = Number(inflatableID);
      }})

    this.bounceHouseService.getAllBounceHouses()
    .subscribe({
      next: (bounceHouses) => {
        this.bounceHouses = bounceHouses;

        for (var i = 0; i < 100; i++) { 

          if (this.bounceHouses[i]?.intBounceHouseID == this.intInflatableID){

              this.strName = this.bounceHouses[i].strBounceHouseName;
              this.strDescription = this.bounceHouses[i].strDescription;
              this.intInflatableID = this.bounceHouses[i].intBounceHouseTypeID;
              this.strURL = this.bounceHouses[i].strURL;
              this.intPurchaseYear = this.bounceHouses[i].intPurchaseYear;
              this.intStakes = this.bounceHouses[i].intNumberOfStakesRequired;
              this.intBlowers = this.bounceHouses[i].intNumberOfBlowersRequired;
              this.intType = this.bounceHouses[i].intBounceHouseTypeID;
              this.intEmployees = this.bounceHouses[i].intEmployeesNeededForSetup;


          }




        }












      },
      error: (response) => {
        console.log(response);
      }
    });



  }

}
