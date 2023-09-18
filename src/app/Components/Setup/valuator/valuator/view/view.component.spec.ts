import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewValuatorComponent } from './view.component';

describe('ViewValuatorComponent', () => {
  let component: ViewValuatorComponent;
  let fixture: ComponentFixture<ViewValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewValuatorComponent]
    });
    fixture = TestBed.createComponent(ViewValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
