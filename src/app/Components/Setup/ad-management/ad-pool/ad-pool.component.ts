import { Component, OnInit } from '@angular/core';
import { AdPoolService } from 'src/app/Services/Setup/Ad-Management/ad-pool.service';

@Component({
  selector: 'app-ad-pool',
  templateUrl: './ad-pool.component.html',
  styleUrls: ['./ad-pool.component.css'],
})
export class AdPoolComponent implements OnInit {
  constructor(private api:AdPoolService){}
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
    this.data = [
      {
        loginName: 'loginName',
        title: 'title',
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNumber: 'phoneNumber',
        emailId: 'emailId',
        syncDate: 'syncDate',
        status: 'status',
      },
    ];
  }
}
