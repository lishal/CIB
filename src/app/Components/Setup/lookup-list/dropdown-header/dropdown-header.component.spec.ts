import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHeaderComponent } from './dropdown-header.component';

describe('DropdownHeaderComponent', () => {
  let component: DropdownHeaderComponent;
  let fixture: ComponentFixture<DropdownHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownHeaderComponent]
    });
    fixture = TestBed.createComponent(DropdownHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
