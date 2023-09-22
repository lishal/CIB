import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLookupDropdownElementComponent } from './delete.component';

describe('DeleteLookupDropdownElementComponent', () => {
  let component: DeleteLookupDropdownElementComponent;
  let fixture: ComponentFixture<DeleteLookupDropdownElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLookupDropdownElementComponent]
    });
    fixture = TestBed.createComponent(DeleteLookupDropdownElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
