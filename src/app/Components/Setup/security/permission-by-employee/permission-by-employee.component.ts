import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-by-employee',
  templateUrl: './permission-by-employee.component.html',
  styleUrls: ['./permission-by-employee.component.css']
})
export class PermissionByEmployeeComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
   
    this.data = [
      {
        id: 'id',
        employee: 'Employee',
        permission: 'permission',
        readOnly: 'readOnly',
        editOnly: 'editOnly',
        createOnly: 'createOnly',
        deleteOnly: 'deleteOnly'
      },
    ];
  }
}