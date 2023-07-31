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
  currentLeftPanel: string = '';
  items: MenuItem[] | undefined;
  onClickRightPanel(content: string) {
    this.currentLeftPanel = content;
    switch (this.currentLeftPanel) {
      case 'Setup':
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
        break;

      case 'Credit':
        this.items = [
          {
            label: 'Credit Test1',
            icon: 'fa-solid fa-house',
            url: 'http://angular.io',
          },
          {
            label: 'Credit Test2',
            icon: 'fa-solid fa-building',
            routerLink: '/fileupload',
          },
          {
            label: 'Credit Test3',
            icon: 'fa-solid fa-gear',
            routerLink: '/fileupload',
          },
          {
            label: 'Credit Test4',
            icon: 'fa-solid fa-key',
            routerLink: '/fileupload',
          },
          {
            label: 'Credit Test5',
            icon: 'fa-solid fa-gears',
            routerLink: '/fileupload',
          },
          {
            label: 'Credit Test6',
            icon: 'fa-solid fa-envelope',
            routerLink: '/fileupload',
          },
        ];
        break;

      default:
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
        break;
    }
  }

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
