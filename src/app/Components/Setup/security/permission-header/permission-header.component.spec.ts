import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionHeaderComponent } from './permission-header.component';

describe('PermissionHeaderComponent', () => {
  let component: PermissionHeaderComponent;
  let fixture: ComponentFixture<PermissionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionHeaderComponent]
    });
    fixture = TestBed.createComponent(PermissionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
