import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  vehicleDetails: any = {};

  constructor(private route: ActivatedRoute, private vehicleService:
    VehiclesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const vehicleID = params.get('id');

        if(vehicleID) {
          //call api
          this.vehicleService.getVehicle(vehicleID)
          .subscribe({
            next: (response) => {
              this.vehicleDetails = response;
            }
          });
        }
      }
    })
  }

  updateVehicle() {
    this.vehicleService.updateVehicle(this.vehicleDetails.intVehicleID, this.vehicleDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['vehicles']);
      }
    });
  }

  deleteVehicle(intVehicleID: string) {
    this.vehicleService.deleteVehicle(intVehicleID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['vehicles']);
      }
    });
  }

}
