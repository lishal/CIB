import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSidebarSemiClosed = false;

  toggleSidebar() {
    this.isSidebarSemiClosed = !this.isSidebarSemiClosed;
  }
  // Right Panel
  displayRightPanel = false;

  showRightPanel() {
    this.displayRightPanel = true;
  }

  hideRightPanel() {
    this.displayRightPanel = false;
  }
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa-solid fa-house',
        url: 'http://angular.io',
      },
      {
        label: 'Company',
        icon: 'fa-solid fa-building',
        routerLink: '/fileupload',
      },
      {
        label: 'Settings',
        icon: 'fa-solid fa-gear',
        routerLink: '/fileupload',
      },
      {
        label: 'Auth',
        icon: 'fa-solid fa-key',
        routerLink: '/fileupload',
      },
      {
        label: 'Setting2',
        icon: 'fa-solid fa-gears',
        routerLink: '/fileupload',
      },
      {
        label: 'Mail',
        icon: 'fa-solid fa-envelope',
        routerLink: '/fileupload',
      },
    ];
  }
}
