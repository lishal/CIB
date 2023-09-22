import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLookupDropdownHeaderComponent } from './delete.component';

describe('DeleteLookupDropdownHeaderComponent', () => {
  let component: DeleteLookupDropdownHeaderComponent;
  let fixture: ComponentFixture<DeleteLookupDropdownHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLookupDropdownHeaderComponent]
    });
    fixture = TestBed.createComponent(DeleteLookupDropdownHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
