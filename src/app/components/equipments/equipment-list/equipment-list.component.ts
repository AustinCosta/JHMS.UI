import { Component, OnInit } from '@angular/core';
import { EquipmentsService } from 'src/app/services/equipments.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipments: any[] = [];

  constructor(private equipmentsService: EquipmentsService) { }

  ngOnInit(): void {
    this.equipmentsService.getAllEquipments()
    .subscribe({
      next: (equipments) => {
        this.equipments = equipments;
        console.log(equipments);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
