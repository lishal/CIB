import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css'],
})
export class CustomFilterComponent {
  @Input() fieldName: string = '';
  @Input() fieldType: string = '';
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('filter') filter!: OverlayPanel;
  filterIcon: string = 'fa-solid fa-filter';
  filterLabel: string = '';

  reset(fieldName: string, value: string) {
    const mode = 'reset';
    this.filterIcon = 'fa-solid fa-filter';
    this.filterLabel = '';

    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  equal(fieldName: string, value: string) {
    const mode = 'equal';
    this.filterIcon = '';
    this.filterLabel = '=';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  notEqual(fieldName: string, value: string) {
    const mode = 'notEqual';
    this.filterIcon = '';
    this.filterLabel = '!=';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  greater(fieldName: string, value: string) {
    const mode = 'greater';
    this.filterIcon = '';
    this.filterLabel = '>';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  greaterEqual(fieldName: string, value: string) {
    const mode = 'greaterEqual';
    this.filterIcon = '';
    this.filterLabel = '>=';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  less(fieldName: string, value: string) {
    const mode = 'less';
    this.filterIcon = '';
    this.filterLabel = '<';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  lessEqual(fieldName: string, value: string) {
    const mode = 'equal';
    this.filterIcon = '';
    this.filterLabel = '<=';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  starts(fieldName: string, value: string) {
    const mode = 'startsWith';
    this.filterIcon = '';
    this.filterLabel = 'sw';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  ends(fieldName: string, value: string) {
    const mode = 'endsWith';
    this.filterIcon = '';
    this.filterLabel = 'ew';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
  contains(fieldName: string, value: string) {
    const mode = 'contains';
    this.filterIcon = '';
    this.filterLabel = 'ss';
    this.data.emit({ fieldName: fieldName, mode: mode, value: value });
    this.filter.hide();
  }
}
