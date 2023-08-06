import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDataFromOtherComponent } from './import-data-from-other.component';

describe('ImportDataFromOtherComponent', () => {
  let component: ImportDataFromOtherComponent;
  let fixture: ComponentFixture<ImportDataFromOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportDataFromOtherComponent]
    });
    fixture = TestBed.createComponent(ImportDataFromOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
