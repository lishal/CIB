import { Component, OnInit } from '@angular/core';

interface SearchOption {
  name: String;
}

@Component({
  selector: 'app-permission-by-role',
  templateUrl: './permission-by-role.component.html',
  styleUrls: ['./permission-by-role.component.css'],
})

export class PermissionByRoleComponent implements OnInit {
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
        permission: 'permission',
        readOnly: 'readOnly',
        createOnly: 'createOnly',
        deleteOnly: 'deleteOnly'
      },
    ];
  }
}
