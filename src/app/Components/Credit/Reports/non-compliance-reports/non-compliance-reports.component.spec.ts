import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonComplianceReportsComponent } from './non-compliance-reports.component';

describe('NonComplianceReportsComponent', () => {
  let component: NonComplianceReportsComponent;
  let fixture: ComponentFixture<NonComplianceReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonComplianceReportsComponent]
    });
    fixture = TestBed.createComponent(NonComplianceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
