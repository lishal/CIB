import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditETemplatesComponent } from './edit.component';

describe('EditETemplatesComponent', () => {
  let component: EditETemplatesComponent;
  let fixture: ComponentFixture<EditETemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditETemplatesComponent]
    });
    fixture = TestBed.createComponent(EditETemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
