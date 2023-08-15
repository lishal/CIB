import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../../../../Services/Setup/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css'],
})
export class ProvinceComponent implements OnInit {
  data: any[] = [];
  isLoading: boolean = false;
  constructor(private api: ProvinceService) {}

  showData(id: number) {
    const displayData = this.data.find((data) => data.id === id);
    console.log(displayData);
  }
  editData(id: number) {
    const editData = this.data.find((data) => data.id === id);
    console.log(editData);
  }
  deleteData(id: number) {
    const deleteData = this.data.find((data) => data.id === id);
    console.log(deleteData);
  }
  ngOnInit(): void {
    this.isLoading = true;

    this.api.fetchData().subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
        // console.log(this.data)
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
