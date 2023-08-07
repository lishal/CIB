import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSidebarClosed = false;
  topPanelLabel: string = '';

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
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
            routerLink: 'employee',
            title: 'employee',
          },
          {
            label: 'Valuator',
            icon: 'fa-solid fa-user-doctor',
            routerLink: 'valuator',
            title: 'Valuator',
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: 'lookup',
            title: 'Lookup List',
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: 'security',
            title: 'Security',
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: 'admanagement',
            title: 'AD Management',
          },
          {
            label: 'Email Template(s)',
            icon: 'fa-solid fa-envelope',
            routerLink: 'emailTemplates',
            title: 'Email Template(s)',
          },
          {
            label: 'SMS Template',
            icon: 'fa-solid fa-comment',
            routerLink: 'smsTemplates',
            title: 'SMS Template',
          },
          {
            label: 'Popup Message',
            icon: 'fa-solid fa-bell',
            routerLink: 'popupMessage',
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
            routerLink: 'creditDashboard',
            title: 'Dashboard',
          },
          {
            label: 'Email Config',
            icon: 'fa-solid fa-envelope',
            routerLink: 'emailConfig',
            title: 'Email Config',
          },
          {
            label: 'CIB Entry',
            icon: 'fa-solid fa-image-portrait',
            routerLink: 'cibEntry',
            title: 'CIB Entry',
          },
          {
            label: 'Valuator Branch Link',
            icon: 'fa-solid fa-building',
            routerLink: 'valuatorBranchLink',
            title: 'Valuator Branch Link',
          },
          {
            label: 'Validate Entry',
            icon: 'fa-solid fa-address-card',
            routerLink: 'validateEntry',
            title: 'Validate Entry',
          },
          {
            label: 'CIB Viewer',
            icon: 'fa-solid fa-star',
            routerLink: 'cibViewer',
            title: 'CIB Viewer',
          },
          {
            label: 'Generate IFF',
            icon: 'fa-solid fa-wrench',
            routerLink: 'generateIFf',
            title: 'Generate IFF',
          },
          {
            label: 'Check For Blacklist',
            icon: 'fa-solid fa-star-of-life',
            routerLink: 'checkBlackList',
            title: 'Check For Blacklist',
          },
          {
            label: 'Data Management',
            icon: 'fa-solid fa-database',
            title: 'Data Management',
            items: [
              {
                label: 'Clean Duplicate Entry',
                // icon: 'fa-solid fa-database',
                routerLink: 'cleanDuplicateEntry',
                title: 'Clean Duplicate Entry',
              },
              {
                label: 'Import Data From Other',
                // icon: 'fa-solid fa-database',
                routerLink: 'importDataFromOther',
                title: 'Import Data From Other',
              },
              {
                label: 'Import/Export CBS Data',
                // icon: 'fa-solid fa-database',
                routerLink: 'importExportCbsData',
                title: 'Import/Export CBS Data',
              },
              {
                label: 'Import via API',
                // icon: 'fa-solid fa-database',
                routerLink: 'importViaApi',
                title: 'Import via API',
              },
              {
                label: 'After Eligibility Data',
                // icon: 'fa-solid fa-database',
                routerLink: 'afterEligibilityData',
                title: 'After Eligibility Data',
              },
              {
                label: 'Internal Screening',
                // icon: 'fa-solid fa-database',
                routerLink: 'internalScreening',
                title: 'Internal Screening',
              },
              {
                label: 'Handle Matching',
                // icon: 'fa-solid fa-database',
                routerLink: 'handleMatching',
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
                // icon: 'fa-solid fa-bars',
                routerLink: 'guarantorSearch',
                title: 'Borrower/Guarantor Search',
              },
              {
                label: 'Valuator By Branch',
                // icon: 'fa-solid fa-bars',
                routerLink: 'valuatorByBranch',
                title: 'Valuator By Branch',
              },
              {
                label: 'Performance Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'performanceReport',
                title: 'Performance Reports',
              },
              {
                label: 'Segment Report',
                // icon: 'fa-solid fa-bars',
                routerLink: 'segmentReport',
                title: 'Segment Report',
              },
              {
                label: 'Non Compliance Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'nonComplianceReports',
                title: 'Non Compliance Reports',
              },
              {
                label: 'Valuator Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'valuatorReports',
                title: 'Valuator Reports',
              },
              {
                label: 'Other Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'otherReports',
                title: 'Other Reports',
              },
              {
                label: 'CICL Report',
                // icon: 'fa-solid fa-bars',
                routerLink: 'ciclReport',
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
        routerLink: 'employee',
        title: 'employee',
      },
      {
        label: 'Valuator',
        icon: 'fa-solid fa-user-doctor',
        routerLink: 'valuator',
        title: 'Valuator',
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: 'lookup',
        title: 'Lookup List',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: 'security',
        title: 'Security',
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: 'admanagement',
        title: 'AD Management',
      },
      {
        label: 'Email Template(s)',
        icon: 'fa-solid fa-envelope',
        routerLink: 'emailTemplates',
        title: 'Email Template(s)',
      },
      {
        label: 'SMS Template',
        icon: 'fa-solid fa-comment',
        routerLink: 'smsTemplates',
        title: 'SMS Template',
      },
      {
        label: 'Popup Message',
        icon: 'fa-solid fa-bell',
        routerLink: 'popupMessage',
        title: 'Popup Message',
      },
    ];
  }
}
