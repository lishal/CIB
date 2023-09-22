import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLookupDropdownHeaderComponent } from './edit.component';

describe('EditLookupDropdownHeaderComponent', () => {
  let component: EditLookupDropdownHeaderComponent;
  let fixture: ComponentFixture<EditLookupDropdownHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLookupDropdownHeaderComponent]
    });
    fixture = TestBed.createComponent(EditLookupDropdownHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
