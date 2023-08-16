import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
  data: any[] = [];
  isLoading: boolean = false;
  ngOnInit(): void {
    this.isLoading = false;
    this.data;
  }
}
