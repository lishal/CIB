import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-header',
  templateUrl: './permission-header.component.html',
  styleUrls: ['./permission-header.component.css'],
})
export class PermissionHeaderComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
    this.data = [
      {
        id: 'id',
        permissionhead: 'permission head',
        fonticon: 'font icon',
        isParent: 'is parent',
        catCode: 'cat code',
        description: 'description',
      },
    ];
  }
}
