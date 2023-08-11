import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/dashboard/company/companyDetail']);
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
