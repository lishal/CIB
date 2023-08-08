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
            routerLinkActiveOptions: { exact: true },
            title: 'Company',
          },
          {
            label: 'Employee',
            icon: 'fa-solid fa-people-group',
            routerLink: 'employee',
            routerLinkActiveOptions: { exact: true },
            title: 'employee',
          },
          {
            label: 'Valuator',
            icon: 'fa-solid fa-user-doctor',
            routerLink: 'valuator',
            routerLinkActiveOptions: { exact: true },
            title: 'Valuator',
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: 'lookup',
            routerLinkActiveOptions: { exact: true },
            title: 'Lookup List',
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: 'security',
            routerLinkActiveOptions: { exact: true },
            title: 'Security',
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: 'admanagement',
            routerLinkActiveOptions: { exact: true },
            title: 'AD Management',
          },
          {
            label: 'Email Template(s)',
            icon: 'fa-solid fa-envelope',
            routerLink: 'emailTemplates',
            routerLinkActiveOptions: { exact: true },
            title: 'Email Template(s)',
          },
          {
            label: 'SMS Template',
            icon: 'fa-solid fa-comment',
            routerLink: 'smsTemplates',
            routerLinkActiveOptions: { exact: true },
            title: 'SMS Template',
          },
          {
            label: 'Popup Message',
            icon: 'fa-solid fa-bell',
            routerLink: 'popupMessage',
            routerLinkActiveOptions: { exact: true },
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
            routerLinkActiveOptions: { exact: true },
            title: 'Dashboard',
          },
          {
            label: 'Email Config',
            icon: 'fa-solid fa-envelope',
            routerLink: 'emailConfig',
            routerLinkActiveOptions: { exact: true },
            title: 'Email Config',
          },
          {
            label: 'CIB Entry',
            icon: 'fa-solid fa-image-portrait',
            routerLink: 'cibEntry',
            routerLinkActiveOptions: { exact: true },
            title: 'CIB Entry',
          },
          {
            label: 'Valuator Branch Link',
            icon: 'fa-solid fa-building',
            routerLink: 'valuatorBranchLink',
            routerLinkActiveOptions: { exact: true },
            title: 'Valuator Branch Link',
          },
          {
            label: 'Validate Entry',
            icon: 'fa-solid fa-address-card',
            routerLink: 'validateEntry',
            routerLinkActiveOptions: { exact: true },
            title: 'Validate Entry',
          },
          {
            label: 'CIB Viewer',
            icon: 'fa-solid fa-star',
            routerLink: 'cibViewer',
            routerLinkActiveOptions: { exact: true },
            title: 'CIB Viewer',
          },
          {
            label: 'Generate IFF',
            icon: 'fa-solid fa-wrench',
            routerLink: 'generateIFf',
            routerLinkActiveOptions: { exact: true },
            title: 'Generate IFF',
          },
          {
            label: 'Check For Blacklist',
            icon: 'fa-solid fa-star-of-life',
            routerLink: 'checkBlackList',
            routerLinkActiveOptions: { exact: true },
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
                routerLinkActiveOptions: { exact: true },
                title: 'Clean Duplicate Entry',
              },
              {
                label: 'Import Data From Other',
                // icon: 'fa-solid fa-database',
                routerLink: 'importDataFromOther',
                routerLinkActiveOptions: { exact: true },
                title: 'Import Data From Other',
              },
              {
                label: 'Import/Export CBS Data',
                // icon: 'fa-solid fa-database',
                routerLink: 'importExportCbsData',
                routerLinkActiveOptions: { exact: true },
                title: 'Import/Export CBS Data',
              },
              {
                label: 'Import via API',
                // icon: 'fa-solid fa-database',
                routerLink: 'importViaApi',
                routerLinkActiveOptions: { exact: true },
                title: 'Import via API',
              },
              {
                label: 'After Eligibility Data',
                // icon: 'fa-solid fa-database',
                routerLink: 'afterEligibilityData',
                routerLinkActiveOptions: { exact: true },
                title: 'After Eligibility Data',
              },
              {
                label: 'Internal Screening',
                // icon: 'fa-solid fa-database',
                routerLink: 'internalScreening',
                routerLinkActiveOptions: { exact: true },
                title: 'Internal Screening',
              },
              {
                label: 'Handle Matching',
                // icon: 'fa-solid fa-database',
                routerLink: 'handleMatching',
                routerLinkActiveOptions: { exact: true },
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
                routerLinkActiveOptions: { exact: true },
                title: 'Borrower/Guarantor Search',
              },
              {
                label: 'Valuator By Branch',
                // icon: 'fa-solid fa-bars',
                routerLink: 'valuatorByBranch',
                routerLinkActiveOptions: { exact: true },
                title: 'Valuator By Branch',
              },
              {
                label: 'Performance Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'performanceReport',
                routerLinkActiveOptions: { exact: true },
                title: 'Performance Reports',
              },
              {
                label: 'Segment Report',
                // icon: 'fa-solid fa-bars',
                routerLink: 'segmentReport',
                routerLinkActiveOptions: { exact: true },
                title: 'Segment Report',
              },
              {
                label: 'Non Compliance Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'nonComplianceReports',
                routerLinkActiveOptions: { exact: true },
                title: 'Non Compliance Reports',
              },
              {
                label: 'Valuator Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'valuatorReports',
                routerLinkActiveOptions: { exact: true },
                title: 'Valuator Reports',
              },
              {
                label: 'Other Reports',
                // icon: 'fa-solid fa-bars',
                routerLink: 'otherReports',
                routerLinkActiveOptions: { exact: true },
                title: 'Other Reports',
              },
              {
                label: 'CICL Report',
                // icon: 'fa-solid fa-bars',
                routerLink: 'ciclReport',
                routerLinkActiveOptions: { exact: true },
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
        routerLinkActiveOptions: { exact: true },
        title: 'Company',
      },
      {
        label: 'Employee',
        icon: 'fa-solid fa-people-group',
        routerLink: 'employee',
        routerLinkActiveOptions: { exact: true },
        title: 'employee',
      },
      {
        label: 'Valuator',
        icon: 'fa-solid fa-user-doctor',
        routerLink: 'valuator',
        routerLinkActiveOptions: { exact: true },
        title: 'Valuator',
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: 'lookup',
        routerLinkActiveOptions: { exact: true },
        title: 'Lookup List',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: 'security',
        routerLinkActiveOptions: { exact: true },
        title: 'Security',
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: 'admanagement',
        routerLinkActiveOptions: { exact: true },
        title: 'AD Management',
      },
      {
        label: 'Email Template(s)',
        icon: 'fa-solid fa-envelope',
        routerLink: 'emailTemplates',
        routerLinkActiveOptions: { exact: true },
        title: 'Email Template(s)',
      },
      {
        label: 'SMS Template',
        icon: 'fa-solid fa-comment',
        routerLink: 'smsTemplates',
        routerLinkActiveOptions: { exact: true },
        title: 'SMS Template',
      },
      {
        label: 'Popup Message',
        icon: 'fa-solid fa-bell',
        routerLink: 'popupMessage',
        routerLinkActiveOptions: { exact: true },
        title: 'Popup Message',
      },
    ];
  }
}
