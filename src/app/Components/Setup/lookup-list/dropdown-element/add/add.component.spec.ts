import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLookupDropdownElementComponent } from './add.component';

describe('AddLookupDropdownElementComponent', () => {
  let component: AddLookupDropdownElementComponent;
  let fixture: ComponentFixture<AddLookupDropdownElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLookupDropdownElementComponent]
    });
    fixture = TestBed.createComponent(AddLookupDropdownElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
