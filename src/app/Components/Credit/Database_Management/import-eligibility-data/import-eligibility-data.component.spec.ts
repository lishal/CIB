import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEligibilityDataComponent } from './import-eligibility-data.component';

describe('ImportEligibilityDataComponent', () => {
  let component: ImportEligibilityDataComponent;
  let fixture: ComponentFixture<ImportEligibilityDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportEligibilityDataComponent]
    });
    fixture = TestBed.createComponent(ImportEligibilityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
