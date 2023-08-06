import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuatorByBranchComponent } from './valuator-by-branch.component';

describe('ValuatorByBranchComponent', () => {
  let component: ValuatorByBranchComponent;
  let fixture: ComponentFixture<ValuatorByBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuatorByBranchComponent]
    });
    fixture = TestBed.createComponent(ValuatorByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
