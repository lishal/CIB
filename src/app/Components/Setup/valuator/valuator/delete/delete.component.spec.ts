import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteValuatorComponent } from './delete.component';

describe('DeleteValuatorComponent', () => {
  let component: DeleteValuatorComponent;
  let fixture: ComponentFixture<DeleteValuatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteValuatorComponent]
    });
    fixture = TestBed.createComponent(DeleteValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
