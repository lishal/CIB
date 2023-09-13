import { Component , OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inner-valuator',
  templateUrl: './valuator.component.html',
  styleUrls: ['./valuator.component.css'],
  providers: [ MessageService],
})
export class InnerValuatorComponent implements OnInit {
  isLoading: boolean = false;
  data: any[] = [];
  ngOnInit(): void {
    this.data=[{test:'test',test2:'test2',id:[{name:'lishal'}]}]
  }

}
