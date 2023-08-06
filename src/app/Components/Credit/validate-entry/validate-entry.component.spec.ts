import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEntryComponent } from './validate-entry.component';

describe('ValidateEntryComponent', () => {
  let component: ValidateEntryComponent;
  let fixture: ComponentFixture<ValidateEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateEntryComponent]
    });
    fixture = TestBed.createComponent(ValidateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
