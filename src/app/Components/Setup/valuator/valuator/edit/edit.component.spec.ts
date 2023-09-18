import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValuatorComponent } from './edit.component';

describe('EditValuatorComponent', () => {
  let component: EditValuatorComponent;
  let fixture: ComponentFixture<EditValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditValuatorComponent]
    });
    fixture = TestBed.createComponent(EditValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
