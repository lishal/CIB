import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopupComponent } from './delete.component';

describe('DeletePopupComponent', () => {
  let component: DeletePopupComponent;
  let fixture: ComponentFixture<DeletePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePopupComponent]
    });
    fixture = TestBed.createComponent(DeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
