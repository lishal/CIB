import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-valuator',
  templateUrl: './valuator.component.html',
  styleUrls: ['./valuator.component.css']
})
export class ValuatorComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Valuator', routerLink: 'valuatorDetail' },
      { label: 'Valuator Relationship', routerLink: 'relationship' },
    ];
  }
}
