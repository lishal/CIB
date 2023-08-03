import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSidebarSemiClosed = false;
  topPanelLabel: string = '';

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
        this.topPanelLabel="Setup and Configuration"
        this.items = [
          {
            label: 'Company',
            icon: 'fa-solid fa-building',
            routerLink: 'company',
          },
          {
            label: 'Employee',
            icon: 'fa-solid fa-people-group',
            routerLink: 'company',
          },
          {
            label: 'Valuator',
            icon: 'fa-solid fa-user-doctor',
            routerLink: 'company',
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: 'company',
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: 'company',
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: 'company',
          },
          {
            label: 'Email Template(s)',
            icon: 'fa-solid fa-envelope',
            routerLink: 'company',
          },
          {
            label: 'SMS Template',
            icon: 'fa-solid fa-comment',
            routerLink: 'company',
          },
          {
            label: 'Popup Message',
            icon: 'fa-solid fa-bell',
            routerLink: 'company',
          },
        ];
        break;

      case 'Credit':
        this.topPanelLabel="CICL Reporting"
        this.items = [
          {
            label: 'Dashboard',
            icon: 'fa-solid fa-gauge',
            url: 'http://angular.io',
          },
          {
            label: 'Email Config',
            icon: 'fa-solid fa-envelope',
            routerLink: 'company',
          },
          {
            label: 'CIB Entry',
            icon: 'fa-solid fa-image-portrait',
            routerLink: 'company',
          },
          {
            label: 'Valuator Branch Link',
            icon: 'fa-solid fa-building',
            routerLink: 'company',
          },
          {
            label: 'Validate Entry',
            icon: 'fa-solid fa-address-card',
            routerLink: 'company',
          },
          {
            label: 'CIB Viewer',
            icon: 'fa-solid fa-star',
            routerLink: 'company',
          },
          {
            label: 'Generate IFF',
            icon: 'fa-solid fa-wrench',
            routerLink: 'company',
          },
          {
            label: 'Check For Blacklist',
            icon: 'fa-solid fa-star-of-life',
            routerLink: 'company',
          },
          {
            label: 'Data Management',
            icon: 'fa-solid fa-database',
            routerLink: 'company',
            items:[{
              label: 'Clean Duplicate Entry',
              icon: 'fa-solid fa-database',
              routerLink: 'company'
            },
            {
            label: 'Import Data From Other',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            {
            label: 'Import/Export CBS Data',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            {
            label: 'Import via API',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            {
            label: 'After Eligibility Data',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            {
            label: 'Internal Screening',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            {
            label: 'Handle Matching',
            icon: 'fa-solid fa-database',
            routerLink: 'company'
            },
            ]
          },
          {
            label: 'Reports',
            icon: 'fa-solid fa-bars',
            routerLink: 'company',
            items:[{
              label: 'Borrower/Guarantor Search',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },{
              label: 'Valuator By Branch',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },{
              label: 'Performance Reports',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },{
              label: 'Segment Report',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },
            {
              label: 'Non Compliance Reports',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },
            {
              label: 'Valuator Reports',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },
            {
              label: 'Other Reports',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },
            {
              label: 'CICL Report',
              icon: 'fa-solid fa-bars',
              routerLink: 'company'
            },
          ]
          },
        ];
        break;
    }
  }

  ngOnInit() {
    this.topPanelLabel="Setup and Configuration"
    this.items = [
      {
        label: 'Company',
        icon: 'fa-solid fa-building',
        routerLink: 'company',
      },
      {
        label: 'Employee',
        icon: 'fa-solid fa-people-group',
        routerLink: 'company',
      },
      {
        label: 'Valuator',
        icon: 'fa-solid fa-user-doctor',
        routerLink: 'company',
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: 'company',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: 'company',
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: 'company',
      },
      {
        label: 'Email Template(s)',
        icon: 'fa-solid fa-envelope',
        routerLink: 'company',
      },
      {
        label: 'SMS Template',
        icon: 'fa-solid fa-comment',
        routerLink: 'company',
      },
      {
        label: 'Popup Message',
        icon: 'fa-solid fa-bell',
        routerLink: 'company',
      },
    ];
  }
}
