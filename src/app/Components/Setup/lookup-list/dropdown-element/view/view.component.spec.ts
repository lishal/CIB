import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLookupDropdownElementComponent } from './view.component';

describe('ViewLookupDropdownElementComponent', () => {
  let component: ViewLookupDropdownElementComponent;
  let fixture: ComponentFixture<ViewLookupDropdownElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLookupDropdownElementComponent]
    });
    fixture = TestBed.createComponent(ViewLookupDropdownElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
