import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentsService } from 'src/app/services/equipments.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  addEquipmentRequest: any = {
    strEquipmentName: '',
    strDescription: '',
    intQuantityOnHand: 0,
    intExpectedQuantity: 0,
  };

  constructor(private equipmentsService: EquipmentsService, private router: Router) { }

  ngOnInit(): void {
  }


  addEquipment() {
    this.equipmentsService.addEquipment(this.addEquipmentRequest)
    .subscribe({
      next: (equipment) => {
        this.router.navigate(['equipments']);
      }
    });
  }

}
