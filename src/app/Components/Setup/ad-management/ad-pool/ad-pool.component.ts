import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-pool',
  templateUrl: './ad-pool.component.html',
  styleUrls: ['./ad-pool.component.css'],
})
export class AdPoolComponent implements OnInit {
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
