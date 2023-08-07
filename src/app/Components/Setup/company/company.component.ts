import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  items: MenuItem[] | undefined;
  test:[{
    label:'Company Setup'
    icon:'fa-solid fa-building'
  }] | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Company' },
      { label: 'Province' },
      { label: 'Branch' },
      { label: 'Department' },
      { label: 'Role' },
      { label: 'Backup' },
    ];
  }
}
