import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get Customers from api endpoint which calls SQL command
  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/employees', addEmployeeRequest);
  }

  getEmployee(intEmployeeID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/employees/' + intEmployeeID);
  }

  updateEmployee(intEmployeeID: string, updateEmployeeRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/employees/' + intEmployeeID, updateEmployeeRequest);
  }

  deleteEmployee(intEmployeeID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/employees/' + intEmployeeID)
  }

}
