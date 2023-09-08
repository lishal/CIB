import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/Services/Setup/employee.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEmployeeComponent } from './add/add.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DialogService, MessageService],
})
export class EmployeeComponent implements OnInit{
  constructor(
    private api: EmployeeService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  data: any[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  addData() {
    this.ref = this.dialogService.open(AddEmployeeComponent, {
      header: `Add Staff`,
      width: '90%',
      height: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data !== undefined) {
        if (data[1] === true) {
          // const date = new Date(data[0].date);
          // const newDate = date.toISOString().split('T')[0];
          // data[0].date=newDate
          this.data.push(data[0]);
          console.log(data[0])
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data added successfully',
          });
        }
      }
    });
  }

  showData(loginIdentifer: string) {

  }
  editData(loginIdentifer: string) {

  }
  deleteData(loginIdentifer: string) {

  }

  
  

  ngOnInit() {

  }
}
