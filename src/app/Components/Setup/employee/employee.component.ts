import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/Services/Setup/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ MessageService],
})
export class EmployeeComponent implements OnInit{
  constructor(
    private api: EmployeeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {

  }
}
