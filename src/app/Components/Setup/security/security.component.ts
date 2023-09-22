import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Permission Header', routerLink: 'permissionHeader' },
      { label: 'Permission By Role', routerLink: 'permissionByRole' },
      { label: 'Permission By Employee', routerLink: 'permissionByEmployee' },
    ];
  }
}