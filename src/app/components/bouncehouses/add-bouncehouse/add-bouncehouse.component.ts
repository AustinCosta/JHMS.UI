import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BouncehousesService } from 'src/app/services/bouncehouses.service';

@Component({
  selector: 'app-add-bouncehouse',
  templateUrl: './add-bouncehouse.component.html',
  styleUrls: ['./add-bouncehouse.component.css']
})
export class AddBouncehouseComponent implements OnInit {

  addBounceHouseRequest: any = {
    intBounceHouseTypeID: 0,
    strBounceHouseName: '',
    strDescription: '',
    intEmployeesNeededForSetup: 0,
    intNumberOfStakesRequired: 0,
    intNumberOfBlowersRequired: 0,
    strDateOfLastPurchase: '',
    strURL: '',
    intPurchaseYear: 0
  };

  constructor(private bouncehousesService: BouncehousesService, private router: Router) { }

  ngOnInit(): void {
  }

  addBounceHouse() {
    this.bouncehousesService.addBounceHouse(this.addBounceHouseRequest)
    .subscribe({
      next: (bounceHouse) => {
        this.router.navigate(['bouncehouses']);
      }
    });
  }

}
