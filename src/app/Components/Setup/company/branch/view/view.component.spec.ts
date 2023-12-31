import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBranchComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewBranchComponent;
  let fixture: ComponentFixture<ViewBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBranchComponent]
    });
    fixture = TestBed.createComponent(ViewBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
