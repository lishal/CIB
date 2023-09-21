import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLookupDropdownHeaderComponent } from './add.component';

describe('AddLookupDropdownHeaderComponent', () => {
  let component: AddLookupDropdownHeaderComponent;
  let fixture: ComponentFixture<AddLookupDropdownHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLookupDropdownHeaderComponent]
    });
    fixture = TestBed.createComponent(AddLookupDropdownHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
