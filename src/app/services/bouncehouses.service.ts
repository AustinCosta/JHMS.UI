import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BouncehousesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get Bouncehouses from api endpoint which calls SQL command
  getAllBounceHouses(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/bouncehouses');
  }

  addBounceHouse(addBounceHouseRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/bouncehouses', addBounceHouseRequest);
  }

  getBounceHouse(intBounceHouseID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/bouncehouses/' + intBounceHouseID);
  }

  updateBounceHouse(intBounceHouseID: string, updateBounceHouseRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/bouncehouses/' + intBounceHouseID, updateBounceHouseRequest);
  }

  deleteBounceHouse(intBounceHouseID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/bouncehouses/' + intBounceHouseID)
  }

}
