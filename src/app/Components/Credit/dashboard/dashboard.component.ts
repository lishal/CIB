import { Component ,OnInit} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class CreditDashboardComponent{
    currentDate = new Date();
     year = this.currentDate.getFullYear();
   month = this.currentDate.getMonth() + 1; // Adding 1 to get the correct month (1-12)
   day = this.currentDate.getDate();
  
  // Create a formatted date string in the desired format
   formattedDate = `${this.year}-${this.month < 10 ? '0' : ''}${this.month}-${this.day < 10 ? '0' : ''}${this.day}`;
  
}
