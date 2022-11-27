import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get vehicles from api endpoint which calls SQL command
  getAllVehicles(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/vehicles');
  }

  addVehicle(addVehicleRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/vehicles', addVehicleRequest);
  }

  getVehicle(intVehicleID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/vehicles/' + intVehicleID);
  }

  updateVehicle(intVehicleID: string, updateVehicleRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/vehicles/' + intVehicleID, updateVehicleRequest);
  }

  deleteVehicle(intVehicleID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/vehicles/' + intVehicleID)
  }

}
