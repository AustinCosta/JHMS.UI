import { Component, OnInit } from '@angular/core';
import { BouncehousesService } from 'src/app/services/bouncehouses.service';

@Component({
  selector: 'app-bouncehouse-list',
  templateUrl: './bouncehouse-list.component.html',
  styleUrls: ['./bouncehouse-list.component.css']
})
export class BouncehouseListComponent implements OnInit {

  bounceHouses: any[] = [];

  constructor(private bounceHouseService: BouncehousesService) { }

  ngOnInit(): void {
    this.bounceHouseService.getAllBounceHouses()
    .subscribe({
      next: (bounceHouses) => {
        this.bounceHouses = bounceHouses;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
