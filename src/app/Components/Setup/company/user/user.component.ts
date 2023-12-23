import { Component } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import {
  UserService,
  userRequest,
} from 'src/app/Services/Setup/Company/user.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DialogService, MessageService],
})
export class UserComponent {
  data: any[] = [];
  request: userRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filterRequest: [],
  };
  toBeFiltered: any[] = [];
  totalRecords: number = 0;
  isLoading: boolean = true;
  ref: DynamicDialogRef | undefined;
  constructor(
    private api: UserService,
    public dialogService: DialogService,
    private messageService: MessageService,
    public loadingService: LoadingService
  ) {}

  async getUserData(): Promise<any> {
    return new Promise((resolve) => {
      this.isLoading = true;
      this.api.getUserData(this.request).subscribe(
        (response) => {
          this.data = response.value;
          this.totalRecords = response.count;
          this.isLoading = false;
          resolve(this.data);
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Internal Server Error!',
          });
          this.isLoading = false;
        }
      );
    });
  }

  loadData($event: TableLazyLoadEvent) {
    this.request.first = $event.first || 0;
    this.request.rows = $event.rows || 5;
    this.request.sortField = $event.sortField || '';
    this.request.sortOrder = $event.sortOrder || 1;
    this.request.filterRequest = this.toBeFiltered || [];
    this.getUserData();
  }

  filter(data: any, fieldName: string) {
    const index = this.toBeFiltered.findIndex(
      (data) => data.fieldName === fieldName
    );
    if (index === -1) {
      this.toBeFiltered.push(data);
    } else {
      this.toBeFiltered[index] = { ...this.toBeFiltered[index], ...data };
    }
    this.request = {
      ...this.request,
      first: 0,
      filterRequest: this.toBeFiltered,
    };
    this.getUserData();
  }
}
