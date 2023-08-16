import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  data=[{
    companyName:'NIC Asia Bank Ltd',
    dpid:'014',
    prevDpid:0,
    tradingStm:'',
    secretKey:''
  }]

ngOnInit() {
  this.data;
}

}
