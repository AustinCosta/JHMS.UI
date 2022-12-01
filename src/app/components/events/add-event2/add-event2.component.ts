import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.css']
})
export class AddEvent2Component implements OnInit {

  addEventRequest: any = {
    strEventType: '',
    intCustomerID: 0,
    intEnvironmentTypeID: 0,
    dteEventStartDate: Date,
    dteEventEndDate: Date,
    strEventName: '',
    strEventStartTime: '',
    strEventEndTime: '',
    strEventSetupTime: '',
    strEventDescription: '',
    intInflatablesNeeded: 0,
    intEmployeesForTheEvent: 0,
    strLocation: '',
  };

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
  }

  addEvent() {
    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (event) => {
        this.router.navigate(['events']);
      }
    });
  }

}
