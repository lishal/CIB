import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLookupIffVersionComponent } from './delete.component';

describe('DeleteLookupIffVersionComponent', () => {
  let component: DeleteLookupIffVersionComponent;
  let fixture: ComponentFixture<DeleteLookupIffVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLookupIffVersionComponent]
    });
    fixture = TestBed.createComponent(DeleteLookupIffVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
