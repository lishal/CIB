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
            label: 'Company',
            icon: 'fa-solid fa-building',
            url: 'http://angular.io',
          },
          {
            label: 'Employee',
            icon: 'fa-solid fa-people-group',
            routerLink: '/fileupload',
          },
          {
            label: 'Valuator',
            icon: 'fa-solid fa-user-doctor',
            routerLink: '/fileupload',
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: '/fileupload',
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: '/fileupload',
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: '/fileupload',
          },
          {
            label: 'Email Template(s)',
            icon: 'fa-solid fa-envelope',
            routerLink: '/fileupload',
          },
          {
            label: 'SMS Template',
            icon: 'fa-solid fa-comment',
            routerLink: '/fileupload',
          },
          {
            label: 'Popup Message',
            icon: 'fa-solid fa-bell',
            routerLink: '/fileupload',
          },
        ];
        break;

      case 'Credit':
        this.items = [
          {
            label: 'Dashboard',
            icon: 'fa-solid fa-gauge',
            url: 'http://angular.io',
          },
          {
            label: 'Email Config',
            icon: 'fa-solid fa-envelope',
            routerLink: '/fileupload',
          },
          {
            label: 'CIB Entry',
            icon: 'fa-solid fa-image-portrait',
            routerLink: '/fileupload',
          },
          {
            label: 'Valuator Branch Link',
            icon: 'fa-solid fa-building',
            routerLink: '/fileupload',
          },
          {
            label: 'Validate Entry',
            icon: 'fa-solid fa-address-card',
            routerLink: '/fileupload',
          },
          {
            label: 'CIB Viewer',
            icon: 'fa-solid fa-star',
            routerLink: '/fileupload',
          },
          {
            label: 'Generate IFF',
            icon: 'fa-solid fa-wrench',
            routerLink: '/fileupload',
          },
          {
            label: 'Check For Blacklist',
            icon: 'fa-solid fa-star-of-life',
            routerLink: '/fileupload',
          },
          {
            label: 'Data Management',
            icon: 'fa-solid fa-database',
            routerLink: '/fileupload',
          },
          {
            label: 'Reports',
            icon: 'fa-solid fa-bars',
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
        label: 'Company',
        icon: 'fa-solid fa-building',
        url: 'http://angular.io',
      },
      {
        label: 'Employee',
        icon: 'fa-solid fa-people-group',
        routerLink: '/fileupload',
      },
      {
        label: 'Valuator',
        icon: 'fa-solid fa-user-doctor',
        routerLink: '/fileupload',
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: '/fileupload',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: '/fileupload',
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: '/fileupload',
      },
      {
        label: 'Email Template(s)',
        icon: 'fa-solid fa-envelope',
        routerLink: '/fileupload',
      },
      {
        label: 'SMS Template',
        icon: 'fa-solid fa-comment',
        routerLink: '/fileupload',
      },
      {
        label: 'Popup Message',
        icon: 'fa-solid fa-bell',
        routerLink: '/fileupload',
      },
    ];
  }
}
