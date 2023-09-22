import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionByEmployeeComponent } from './permission-by-employee.component';

describe('PermissionByEmployeeComponent', () => {
  let component: PermissionByEmployeeComponent;
  let fixture: ComponentFixture<PermissionByEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionByEmployeeComponent]
    });
    fixture = TestBed.createComponent(PermissionByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
