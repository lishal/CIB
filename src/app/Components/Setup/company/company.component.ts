import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  items: MenuItem[] | undefined;
  test:
    | [
        {
          label: 'Company Setup';
          icon: 'fa-solid fa-building';
        }
      ]
    | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Company', routerLink: 'companyDetail' },
      { label: 'Province', routerLink: 'province' },
      { label: 'Branch', routerLink: 'branch' },
      { label: 'Department', routerLink: 'department' },
      { label: 'Role', routerLink: 'role' },
      { label: 'Backup', routerLink: 'backup' },
    ];
  }
}
