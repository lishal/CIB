import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteUserComponent;
  let fixture: ComponentFixture<DeleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserComponent],
    });
    fixture = TestBed.createComponent(DeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
