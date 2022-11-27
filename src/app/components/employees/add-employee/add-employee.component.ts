import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: any = {
    strFirstName: '',
    strLastName: '',
    strPhoneNumber: '',
    strAddress: '',
    strCity: '',
    strState: '',
    strZip: '',
    strDateOfBirth: '',
    strEmail: '',
    strDrivingStatus: '',
    strEmploymentTitle: '',
  };

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }

  addEmployee() {
    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
