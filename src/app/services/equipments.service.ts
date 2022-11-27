import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get equipments from api endpoint which calls SQL command
  getAllEquipments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/equipments');
  }

  addEquipment(addEquipmentRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/equipments', addEquipmentRequest);
  }

  getEquipment(intEquipmentID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/equipments/' + intEquipmentID);
  }

  updateEquipment(intEquipmentID: string, updateEquipmentRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/equipments/' + intEquipmentID, updateEquipmentRequest);
  }

  deleteEquipment(intEquipmentID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/equipments/' + intEquipmentID)
  }

}
