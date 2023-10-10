import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSTemplatesComponent } from './delete.component';

describe('DeleteSTemplatesComponent', () => {
  let component: DeleteSTemplatesComponent;
  let fixture: ComponentFixture<DeleteSTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSTemplatesComponent]
    });
    fixture = TestBed.createComponent(DeleteSTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
