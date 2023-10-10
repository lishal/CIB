import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSTemplatesComponent } from './edit.component';

describe('EditSTemplatesComponent', () => {
  let component: EditSTemplatesComponent;
  let fixture: ComponentFixture<EditSTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSTemplatesComponent]
    });
    fixture = TestBed.createComponent(EditSTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
