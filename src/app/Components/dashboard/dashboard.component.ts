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
        this.topPanelLabel = 'Setup and Configuration';
        this.items = [
          {
            label: 'Company',
            icon: 'fa-solid fa-building',
            routerLink: 'company',
            title: 'Company',
          },
          {
            label: 'Employee',
            icon: 'fa-solid fa-people-group',
            routerLink: 'company',
            title: 'Employee',
          },
          {
            label: 'Valuator',
            icon: 'fa-solid fa-user-doctor',
            routerLink: 'company',
            title: 'Valuator',
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: 'company',
            title: 'Lookup List',
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: 'company',
            title: 'Security',
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: 'company',
            title: 'AD Management',
          },
          {
            label: 'Email Template(s)',
            icon: 'fa-solid fa-envelope',
            routerLink: 'company',
            title: 'Email Template(s)',
          },
          {
            label: 'SMS Template',
            icon: 'fa-solid fa-comment',
            routerLink: 'company',
            title: 'SMS Template',
          },
          {
            label: 'Popup Message',
            icon: 'fa-solid fa-bell',
            routerLink: 'company',
            title: 'Popup Message',
          },
        ];
        break;

      case 'Credit':
        this.topPanelLabel = 'CICL Reporting';
        this.items = [
          {
            label: 'Dashboard',
            icon: 'fa-solid fa-gauge',
            url: 'http://angular.io',
            title: 'Dashboard',
          },
          {
            label: 'Email Config',
            icon: 'fa-solid fa-envelope',
            routerLink: 'company',
            title: 'Email Config',
          },
          {
            label: 'CIB Entry',
            icon: 'fa-solid fa-image-portrait',
            routerLink: 'company',
            title: 'CIB Entry',
          },
          {
            label: 'Valuator Branch Link',
            icon: 'fa-solid fa-building',
            routerLink: 'company',
            title: 'Valuator Branch Link',
          },
          {
            label: 'Validate Entry',
            icon: 'fa-solid fa-address-card',
            routerLink: 'company',
            title: 'Validate Entry',
          },
          {
            label: 'CIB Viewer',
            icon: 'fa-solid fa-star',
            routerLink: 'company',
            title: 'CIB Viewer',
          },
          {
            label: 'Generate IFF',
            icon: 'fa-solid fa-wrench',
            routerLink: 'company',
            title: 'Generate IFF',
          },
          {
            label: 'Check For Blacklist',
            icon: 'fa-solid fa-star-of-life',
            routerLink: 'company',
            title: 'Check For Blacklist',
          },
          {
            label: 'Data Management',
            icon: 'fa-solid fa-database',
            title: 'Data Management',
            items: [
              {
                label: 'Clean Duplicate Entry',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Clean Duplicate Entry',
              },
              {
                label: 'Import Data From Other',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Import Data From Other',
              },
              {
                label: 'Import/Export CBS Data',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Import/Export CBS Data',
              },
              {
                label: 'Import via API',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Import via API',
              },
              {
                label: 'After Eligibility Data',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'After Eligibility Data',
              },
              {
                label: 'Internal Screening',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Internal Screening',
              },
              {
                label: 'Handle Matching',
                icon: 'fa-solid fa-database',
                routerLink: 'company',
                title: 'Handle Matching',
              },
            ],
          },
          {
            label: 'Reports',
            icon: 'fa-solid fa-bars',
            title: 'Reports',
            items: [
              {
                label: 'Borrower/Guarantor Search',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Borrower/Guarantor Search',
              },
              {
                label: 'Valuator By Branch',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Valuator By Branch',
              },
              {
                label: 'Performance Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Performance Reports',
              },
              {
                label: 'Segment Report',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Segment Report',
              },
              {
                label: 'Non Compliance Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Non Compliance Reports',
              },
              {
                label: 'Valuator Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Valuator Reports',
              },
              {
                label: 'Other Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'Other Reports',
              },
              {
                label: 'CICL Report',
                icon: 'fa-solid fa-bars',
                routerLink: 'company',
                title: 'CICL Report',
              },
            ],
          },
        ];
        break;
    }
  }

  ngOnInit() {
    this.topPanelLabel = 'Setup and Configuration';
    this.items = [
      {
        label: 'Company',
        icon: 'fa-solid fa-building',
        routerLink: 'company',
        title: 'Company',
      },
      {
        label: 'Employee',
        icon: 'fa-solid fa-people-group',
        routerLink: 'company',
        title: 'Employee',
      },
      {
        label: 'Valuator',
        icon: 'fa-solid fa-user-doctor',
        routerLink: 'company',
        title: 'Valuator',
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: 'company',
        title: 'Lookup List',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: 'company',
        title: 'Security',
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: 'company',
        title: 'AD Management',
      },
      {
        label: 'Email Template(s)',
        icon: 'fa-solid fa-envelope',
        routerLink: 'company',
        title: 'Email Template(s)',
      },
      {
        label: 'SMS Template',
        icon: 'fa-solid fa-comment',
        routerLink: 'company',
        title: 'SMS Template',
      },
      {
        label: 'Popup Message',
        icon: 'fa-solid fa-bell',
        routerLink: 'company',
        title: 'Popup Message',
      },
    ];
  }
}
