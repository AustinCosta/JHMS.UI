import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get events from api endpoint which calls SQL command
  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/events');
  }

  addEvent(addEventRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/events', addEventRequest);
  }

  getEvent(intEventID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/events/' + intEventID);
  }

  updateEvent(intEventID: string, updateEventRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/events/' + intEventID, updateEventRequest);
  }

  deleteEvent(intEventID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/events/' + intEventID)
  }

  //Child Tables/Foreign Key API Methods

  //==================================//
  //        TEventBounceHouses        //
  //==================================//
  getAllEventBounceHouses(intEventID: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/eventbouncehouses/' + intEventID);
  }

  removeEventBounceHouse(intEventBounceHouseID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/eventbouncehouses/' + intEventBounceHouseID)
  }

  //==================================//
  //      TEventEnvironmentTypes      //
  //==================================//
  getAllEventEnvironmentTypes(intEventID: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/eventenvironmenttypes/' + intEventID);
  }


  //==================================//
  //      TEventEmployees             //
  //==================================//
  getAllEventEmployees(intEventID: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/eventemployees/' + intEventID);
  }

  //==================================//
  //      TEventEquipments            //
  //==================================//
  getAllEventEquipments(intEventID: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/eventequipments/' + intEventID);
  }

  //==================================//
  //      TEventVehicles              //
  //==================================//
  getAllEventVehicles(intEventID: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/eventvehicles/' + intEventID);
  }

}
