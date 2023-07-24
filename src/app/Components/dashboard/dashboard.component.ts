import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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
}
