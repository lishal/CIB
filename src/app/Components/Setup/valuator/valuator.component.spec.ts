import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuatorComponent } from './valuator.component';

describe('ValuatorComponent', () => {
  let component: ValuatorComponent;
  let fixture: ComponentFixture<ValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuatorComponent]
    });
    fixture = TestBed.createComponent(ValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
