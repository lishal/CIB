import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLookupDropdownElementComponent } from './edit.component';

describe('EditLookupDropdownElementComponent', () => {
  let component: EditLookupDropdownElementComponent;
  let fixture: ComponentFixture<EditLookupDropdownElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLookupDropdownElementComponent]
    });
    fixture = TestBed.createComponent(EditLookupDropdownElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
