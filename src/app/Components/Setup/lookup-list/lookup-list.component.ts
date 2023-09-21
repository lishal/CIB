import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-lookup-list',
  templateUrl: './lookup-list.component.html',
  styleUrls: ['./lookup-list.component.css']
})
export class LookupListComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Dropdown Header', routerLink: 'lookup-dropdownHeader' },
      { label: 'Dropdown Element', routerLink: 'lookup-dropdownElement' },
      { label: 'IFF Version', routerLink: 'lookup-iffVersion' },
    ];
  }
}
