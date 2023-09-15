import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValuatorComponent } from './add.component';

describe('AddValuatorComponent', () => {
  let component: AddValuatorComponent;
  let fixture: ComponentFixture<AddValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddValuatorComponent]
    });
    fixture = TestBed.createComponent(AddValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
