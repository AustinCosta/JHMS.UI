import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-eventequipment',
  templateUrl: './add-eventequipment.component.html',
  styleUrls: ['./add-eventequipment.component.css']
})
export class AddEventequipmentComponent implements OnInit {

  availableEquipment: any[] = [];
  intEventID: any;

  addEquipmentRequest = {
    intEventID: '',
    intEquipmentID: ''
  }

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const eventID = params.get('id');
        const strStartDate = params.get('strStart');
        const strEndDate = params.get('strEnd');

        //Store event ID to pass later
        this.intEventID = eventID;

        //getAvailableVehicles
        if(eventID)
        {
          if(strStartDate)
          {
            if(strEndDate)
            {
              this.eventsService.getAllEquipments()
              .subscribe({
                next: (response) => {
                  this.availableEquipment = response;
                  console.log(response);
                }
              });
            }
          }
        }
      }
    })

  }

    //Add equipment to an event
    addEventEquipment(intEquipmentID: string) {
      this.addEquipmentRequest.intEventID = this.intEventID;
      this.addEquipmentRequest.intEquipmentID = intEquipmentID;
      this.eventsService.addEventEquipment(this.addEquipmentRequest)
      .subscribe({
        next: (response) => {
          this.ngOnInit();
          alert('Equipment Added');
        }
      });
    }

}
