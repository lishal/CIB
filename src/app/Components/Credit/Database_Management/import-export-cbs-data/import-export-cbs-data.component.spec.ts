import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportCbsDataComponent } from './import-export-cbs-data.component';

describe('ImportExportCbsDataComponent', () => {
  let component: ImportExportCbsDataComponent;
  let fixture: ComponentFixture<ImportExportCbsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportExportCbsDataComponent]
    });
    fixture = TestBed.createComponent(ImportExportCbsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
