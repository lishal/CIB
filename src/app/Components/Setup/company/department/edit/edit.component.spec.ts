import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditDepartmentComponent;
  let fixture: ComponentFixture<EditDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDepartmentComponent]
    });
    fixture = TestBed.createComponent(EditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
