import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditBranchComponent;
  let fixture: ComponentFixture<EditBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBranchComponent]
    });
    fixture = TestBed.createComponent(EditBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
