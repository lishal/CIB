import { Component, OnInit } from '@angular/core';

interface SearchOption {
  name: String;
}

@Component({
  selector: 'app-permission-by-employee',
  templateUrl: './permission-by-employee.component.html',
  styleUrls: ['./permission-by-employee.component.css']
})
export class PermissionByEmployeeComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  searchOption: SearchOption[] = [];
  ngOnInit(): void {
    this.searchOption = [
      { name: 'Admin' }
  ];
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