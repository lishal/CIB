import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/Services/loading.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currentRoute: string = '';
  topPanelLabel: string = '';
  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    public loadingService: LoadingService
  ) {
    router.events.subscribe((url: any) => {
      this.currentRoute = router.url;

      if (this.currentRoute === '/dashboard/company/companyDetail') {
        this.topPanelLabel = 'Comapny';
      } else if (this.currentRoute === '/dashboard/company') {
        this.topPanelLabel = 'Company';
      } else if (this.currentRoute === '/dashboard/company/province') {
        this.topPanelLabel = 'Company - Province';
      } else if (this.currentRoute === '/dashboard/company/branch') {
        this.topPanelLabel = 'Company - Branch';
      } else if (this.currentRoute === '/dashboard/company/department') {
        this.topPanelLabel = 'Company - Department';
      } else if (this.currentRoute === '/dashboard/company/role') {
        this.topPanelLabel = 'Company - Role';
      } else if (this.currentRoute === '/dashboard/company/backup') {
        this.topPanelLabel = 'Company - Backup';
      } else if (this.currentRoute === '/dashboard/employee') {
        this.topPanelLabel = 'Employee';
      } else if (this.currentRoute === '/dashboard/valuator') {
        this.topPanelLabel = 'valuator';
      } else if (this.currentRoute === '/dashboard/lookup') {
        this.topPanelLabel = 'lookup list';
      } else if (this.currentRoute === '/dashboard/security') {
        this.topPanelLabel = 'security';
      } else if (this.currentRoute === '/dashboard/admanagement') {
        this.topPanelLabel = 'AD Management';
      } else if (this.currentRoute === '/dashboard/emailTemplates') {
        this.topPanelLabel = 'Email Templates';
      } else if (this.currentRoute === '/dashboard/smsTemplates') {
        this.topPanelLabel = 'SMS Template';
      } else if (this.currentRoute === '/dashboard/popupMessage') {
        this.topPanelLabel = 'Popup Message';
      } else if (this.currentRoute === '/dashboard/creditDashboard') {
        this.topPanelLabel = 'Dashboard';
      } else if (this.currentRoute === '/dashboard/emailConfig') {
        this.topPanelLabel = 'Email Config';
      } else if (this.currentRoute === '/dashboard/cibEntry') {
        this.topPanelLabel = 'Cib Entry';
      } else if (this.currentRoute === '/dashboard/valuatorBranchLink') {
        this.topPanelLabel = 'valuator Branch Link';
      } else if (this.currentRoute === '/dashboard/validateEntry') {
        this.topPanelLabel = 'Validate Entry';
      } else if (this.currentRoute === '/dashboard/cibViewer') {
        this.topPanelLabel = 'Cib Viewer';
      } else if (this.currentRoute === '/dashboard/generateIFf') {
        this.topPanelLabel = 'Generate IFf';
      } else if (this.currentRoute === '/dashboard/checkBlackList') {
        this.topPanelLabel = 'check Black List';
      } else if (this.currentRoute === '/dashboard/cleanDuplicateEntry') {
        this.topPanelLabel = 'clean Duplicate Entry';
      } else if (this.currentRoute === '/dashboard/importDataFromOther') {
        this.topPanelLabel = 'import Data From Other';
      } else if (this.currentRoute === '/dashboard/importExportCbsData') {
        this.topPanelLabel = 'Import/Export CBS Data';
      } else if (this.currentRoute === '/dashboard/importViaApi') {
        this.topPanelLabel = 'import Via Api';
      } else if (this.currentRoute === '/dashboard/afterEligibilityData') {
        this.topPanelLabel = 'after Eligibility Data';
      } else if (this.currentRoute === '/dashboard/internalScreening') {
        this.topPanelLabel = 'internal Screening';
      } else if (this.currentRoute === '/dashboard/handleMatching') {
        this.topPanelLabel = 'handle Matching';
      } else if (this.currentRoute === '/dashboard/guarantorSearch') {
        this.topPanelLabel = 'Borrower/Guarantor Search';
      } else if (this.currentRoute === '/dashboard/valuatorByBranch') {
        this.topPanelLabel = 'valuator By Branch';
      } else if (this.currentRoute === '/dashboard/performanceReport') {
        this.topPanelLabel = 'performance Report';
      } else if (this.currentRoute === '/dashboard/segmentReport') {
        this.topPanelLabel = 'segment Report';
      } else if (this.currentRoute === '/dashboard/nonComplianceReports') {
        this.topPanelLabel = 'non Compliance Reports';
      } else if (this.currentRoute === '/dashboard/valuatorReports') {
        this.topPanelLabel = 'valuator Reports';
      } else if (this.currentRoute === '/dashboard/otherReports') {
        this.topPanelLabel = 'other Reports';
      } else if (this.currentRoute === '/dashboard/ciclReport') {
        this.topPanelLabel = 'cicl Report';
      } else if (this.currentRoute === '/dashboard/valuator/valuatorDetail') {
        this.topPanelLabel = 'Valuator';
      } else if (this.currentRoute === '/dashboard/valuator/relationship') {
        this.topPanelLabel = 'valuator - Valuator Relationship';
      } else if (
        this.currentRoute === '/dashboard/lookup/lookup-dropdownHeader'
      ) {
        this.topPanelLabel = 'Lookup List - Dropdown Header';
      } else if (
        this.currentRoute === '/dashboard/lookup/lookup-dropdownElement'
      ) {
        this.topPanelLabel = 'Lookup List - Dropdown Element';
      } else if (this.currentRoute === '/dashboard/lookup/lookup-iffVersion') {
        this.topPanelLabel = 'Lookup List - IFF Version';
      } else if (this.currentRoute === '/dashboard/security/permissionHeader') {
        this.topPanelLabel = 'Security - Permission Header';
      } else if (this.currentRoute === '/dashboard/security/permissionByRole') {
        this.topPanelLabel = 'Security - Permission By Role';
      } else if (
        this.currentRoute === '/dashboard/security/permissionByEmployee'
      ) {
        this.topPanelLabel = 'Security - Permission By Employee';
      } else if (this.currentRoute === '/dashboard/admanagement/adPool') {
        this.topPanelLabel = 'AD Management - AD Pool';
      } else if (this.currentRoute === '/dashboard/admanagement/mapUserAD') {
        this.topPanelLabel = 'AD Management - Map User to AD';
      }
    });
  }

  // if(this.currentRoute=="/company"){
  //   this.topPanel="Company";
  // }
  isSidebarClosed = true;

  profileOverlay: boolean = false;

  profileToggle() {
    this.profileOverlay = !this.profileOverlay;
  }
  notificationOverlay: boolean = false;

  notificationToggle() {
    this.notificationOverlay = !this.notificationOverlay;
  }

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
        this.primengConfig.ripple = true;
        this.topPanelLabel = 'Setup and Configuration';
        this.items = [
          {
            label: 'Company',
            icon: 'fa-solid fa-building',
            routerLink: 'company',
            title: 'Company',
            command: () => this.companyRedirect(),
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
            command: () => this.valuatorRedirect(),
          },
          {
            label: 'Lookup List',
            icon: 'fa-solid fa-gear',
            routerLink: 'lookup',
            title: 'Lookup List',
            command: () => this.lookupRedirect(),
          },
          {
            label: 'Security',
            icon: 'fa-solid fa-key',
            routerLink: 'security',
            title: 'Security',
            command: () => this.securityRedirect(),
          },
          {
            label: 'AD Management',
            icon: 'fa-solid fa-gears',
            routerLink: 'admanagement',
            title: 'AD Management',
            command: () => this.admanagementRedirect(),
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
        this.router.navigate(['/dashboard/company/companyDetail']);
        this.displayRightPanel = false;
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
                icon: 'fa-solid fa-database',
                routerLink: 'cleanDuplicateEntry',

                title: 'Clean Duplicate Entry',
              },
              {
                label: 'Import Data From Other',
                icon: 'fa-solid fa-database',
                routerLink: 'importDataFromOther',

                title: 'Import Data From Other',
              },
              {
                label: 'Import/Export CBS Data',
                icon: 'fa-solid fa-database',
                routerLink: 'importExportCbsData',

                title: 'Import/Export CBS Data',
              },
              {
                label: 'Import via API',
                icon: 'fa-solid fa-database',
                routerLink: 'importViaApi',

                title: 'Import via API',
              },
              {
                label: 'After Eligibility Data',
                icon: 'fa-solid fa-database',
                routerLink: 'afterEligibilityData',

                title: 'After Eligibility Data',
              },
              {
                label: 'Internal Screening',
                icon: 'fa-solid fa-database',
                routerLink: 'internalScreening',

                title: 'Internal Screening',
              },
              {
                label: 'Handle Matching',
                icon: 'fa-solid fa-database',
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
                icon: 'fa-solid fa-bars',
                routerLink: 'guarantorSearch',

                title: 'Borrower/Guarantor Search',
              },
              {
                label: 'Valuator By Branch',
                icon: 'fa-solid fa-bars',
                routerLink: 'valuatorByBranch',

                title: 'Valuator By Branch',
              },
              {
                label: 'Performance Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'performanceReport',

                title: 'Performance Reports',
              },
              {
                label: 'Segment Report',
                icon: 'fa-solid fa-bars',
                routerLink: 'segmentReport',

                title: 'Segment Report',
              },
              {
                label: 'Non Compliance Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'nonComplianceReports',

                title: 'Non Compliance Reports',
              },
              {
                label: 'Valuator Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'valuatorReports',

                title: 'Valuator Reports',
              },
              {
                label: 'Other Reports',
                icon: 'fa-solid fa-bars',
                routerLink: 'otherReports',

                title: 'Other Reports',
              },
              {
                label: 'CICL Report',
                icon: 'fa-solid fa-bars',
                routerLink: 'ciclReport',

                title: 'CICL Report',
              },
            ],
          },
        ];
        this.router.navigate(['/dashboard/creditDashboard']);
        this.displayRightPanel = false;
        break;
    }
  }
  companyRedirect() {
    this.router.navigate(['/dashboard/company/companyDetail']);
  }
  valuatorRedirect() {
    this.router.navigate(['/dashboard/valuator/valuatorDetail']);
  }
  lookupRedirect() {
    this.router.navigate(['/dashboard/lookup/lookup-dropdownHeader']);
  }
  securityRedirect() {
    this.router.navigate(['/dashboard/security/permissionHeader']);
  }
  admanagementRedirect() {
    this.router.navigate(['/dashboard/admanagement/adPool']);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    // this.companyRedirect()
    this.items = [
      {
        label: 'Company',
        icon: 'fa-solid fa-building',
        routerLink: 'company',
        title: 'Company',
        command: () => this.companyRedirect(),
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
        command: () => this.valuatorRedirect(),
      },
      {
        label: 'Lookup List',
        icon: 'fa-solid fa-gear',
        routerLink: 'lookup',
        command: () => this.lookupRedirect(),
        title: 'Lookup List',
      },
      {
        label: 'Security',
        icon: 'fa-solid fa-key',
        routerLink: 'security',
        title: 'Security',
        command: () => this.securityRedirect(),
      },
      {
        label: 'AD Management',
        icon: 'fa-solid fa-gears',
        routerLink: 'admanagement',
        title: 'AD Management',
        command: () => this.admanagementRedirect(),
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
