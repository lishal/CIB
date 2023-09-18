import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValuatorDocumentComponent } from './add.component';

describe('AddValuatorDocumentComponent', () => {
  let component: AddValuatorDocumentComponent;
  let fixture: ComponentFixture<AddValuatorDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddValuatorDocumentComponent]
    });
    fixture = TestBed.createComponent(AddValuatorDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
