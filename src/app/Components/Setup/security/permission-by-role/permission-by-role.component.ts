import { Component, OnInit } from '@angular/core';
import { PermissionRoleService } from 'src/app/Services/Setup/Security/permission-role.service';

@Component({
  selector: 'app-permission-by-role',
  templateUrl: './permission-by-role.component.html',
  styleUrls: ['./permission-by-role.component.css'],
})

export class PermissionByRoleComponent implements OnInit {
  constructor(private api:PermissionRoleService){}
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
    
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
