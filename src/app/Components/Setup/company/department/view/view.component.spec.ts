import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewDepartmentComponent;
  let fixture: ComponentFixture<ViewDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDepartmentComponent]
    });
    fixture = TestBed.createComponent(ViewDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
