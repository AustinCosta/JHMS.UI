import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BouncehousesService } from 'src/app/services/bouncehouses.service';

@Component({
  selector: 'app-edit-bouncehouse',
  templateUrl: './edit-bouncehouse.component.html',
  styleUrls: ['./edit-bouncehouse.component.css']
})
export class EditBouncehouseComponent implements OnInit {

  bounceHouseDetails: any = {};

  constructor(private route: ActivatedRoute, private bounceHouseService:
    BouncehousesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bounceHouseID = params.get('id');

        if(bounceHouseID) {
          //call api
          this.bounceHouseService.getBounceHouse(bounceHouseID)
          .subscribe({
            next: (response) => {
              this.bounceHouseDetails = response;
            }
          });
        }
      }
    })
  }

  updateBounceHouse() {
    this.bounceHouseService.updateBounceHouse(this.bounceHouseDetails.intBounceHouseID, this.bounceHouseDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['bouncehouses']);
      }
    });
  }

  deleteBounceHouse(intBounceHouseID: string) {
    this.bounceHouseService.deleteBounceHouse(intBounceHouseID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['bouncehouses']);
      }
    });
  }

}
