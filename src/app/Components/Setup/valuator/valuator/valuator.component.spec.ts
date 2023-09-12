import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerValuatorComponent } from './valuator.component';

describe('ValuatorComponent', () => {
  let component: InnerValuatorComponent;
  let fixture: ComponentFixture<InnerValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerValuatorComponent]
    });
    fixture = TestBed.createComponent(InnerValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
