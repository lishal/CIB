import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownElementComponent } from './dropdown-element.component';

describe('DropdownElementComponent', () => {
  let component: DropdownElementComponent;
  let fixture: ComponentFixture<DropdownElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownElementComponent]
    });
    fixture = TestBed.createComponent(DropdownElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
