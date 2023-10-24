import { Component, OnInit } from '@angular/core';
import { MapUserService } from 'src/app/Services/Setup/Ad-Management/map-user.service';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.css']
})
export class MapUserComponent implements OnInit {
  constructor (private api:MapUserService){}
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