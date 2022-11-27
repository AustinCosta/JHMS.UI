import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentsService } from 'src/app/services/equipments.service';

@Component({
  selector: 'app-edit-equipment2',
  templateUrl: './edit-equipment2.component.html',
  styleUrls: ['./edit-equipment2.component.css']
})
export class EditEquipment2Component implements OnInit {

  equipmentDetails: any = {};

  constructor(private route: ActivatedRoute, private equipmentService:
    EquipmentsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const equipmentID = params.get('id');

        if(equipmentID) {
          //call api
          this.equipmentService.getEquipment(equipmentID)
          .subscribe({
            next: (response) => {
              this.equipmentDetails = response;
            }
          });
        }
      }
    })
  }

  updateEquipment() {
    this.equipmentService.updateEquipment(this.equipmentDetails.intEquipmentID, this.equipmentDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['equipments']);
      }
    });
  }

  deleteEquipment(intEquipmentID: string) {
    this.equipmentService.deleteEquipment(intEquipmentID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['equipments']);
      }
    });
  }

}
