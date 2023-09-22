import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLookupDropdownHeaderComponent } from './view.component';

describe('ViewLookupDropdownHeaderComponent', () => {
  let component: ViewLookupDropdownHeaderComponent;
  let fixture: ComponentFixture<ViewLookupDropdownHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLookupDropdownHeaderComponent]
    });
    fixture = TestBed.createComponent(ViewLookupDropdownHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
