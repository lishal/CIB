import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuatorReportsComponent } from './valuator-reports.component';

describe('ValuatorReportsComponent', () => {
  let component: ValuatorReportsComponent;
  let fixture: ComponentFixture<ValuatorReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuatorReportsComponent]
    });
    fixture = TestBed.createComponent(ValuatorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
