import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuatorBranchLinkComponent } from './valuator-branch-link.component';

describe('ValuatorBranchLinkComponent', () => {
  let component: ValuatorBranchLinkComponent;
  let fixture: ComponentFixture<ValuatorBranchLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuatorBranchLinkComponent]
    });
    fixture = TestBed.createComponent(ValuatorBranchLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
