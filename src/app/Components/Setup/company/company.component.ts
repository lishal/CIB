import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private router: Router) {}
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
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
