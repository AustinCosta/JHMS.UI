import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleRequest: any = {
    strVehicleName: '',
    intQuantity: 0,
  };

  constructor(private vehiclesService: VehiclesService, private router: Router) { }

  ngOnInit(): void {
  }

  addVehicle() {
    this.vehiclesService.addVehicle(this.addVehicleRequest)
    .subscribe({
      next: (vehicle) => {
        this.router.navigate(['vehicles']);
      }
    });
  }

}
