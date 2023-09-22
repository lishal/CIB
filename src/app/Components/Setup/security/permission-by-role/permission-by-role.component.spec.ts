import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionByRoleComponent } from './permission-by-role.component';

describe('PermissionByRoleComponent', () => {
  let component: PermissionByRoleComponent;
  let fixture: ComponentFixture<PermissionByRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionByRoleComponent]
    });
    fixture = TestBed.createComponent(PermissionByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
