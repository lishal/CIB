import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.css']
})
export class MapUserComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
    this.data = [
      {
        loginId: 'loginId',
        fullName: 'fullName',
        emailId: 'emailId',
        branchName: 'branchName'
      },
    ];
  }
}