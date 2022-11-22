import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //Get Customers from api endpoint which calls SQL command
  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl + '/api/customers');
  }

  addCustomer(addCustomerRequest: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/api/customers', addCustomerRequest);
  }

  getCustomer(intCustomerID: string): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/customers/' + intCustomerID);
  }

  updateCustomer(intCustomerID: string, updateCustomerRequest: any): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + '/api/customers/' + intCustomerID, updateCustomerRequest);
  }

  deleteCustomer(intCustomerID: string): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/customers/' + intCustomerID)
  }

}
