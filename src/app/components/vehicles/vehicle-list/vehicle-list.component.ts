import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: any[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
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

}
