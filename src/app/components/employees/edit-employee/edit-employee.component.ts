import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: any = {};

  constructor(private route: ActivatedRoute, private employeesService:
    EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const employeeID = params.get('id');

        if(employeeID) {
          //call api
          this.employeesService.getEmployee(employeeID)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
        }
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.intEmployeeID, this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

  deleteEmployee(intEmployeeID: string) {
    this.employeesService.deleteEmployee(intEmployeeID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
