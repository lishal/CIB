import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isSidebarSemiClosed = false;

  toggleSidebar() {
    console.log('I am clicked!');
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
  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/home'],
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      routerLink: ['/about'],
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: ['/contact'],
    },
  ];
}
