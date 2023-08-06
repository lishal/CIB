import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEligibilityDataComponent } from './after-eligibility-data.component';

describe('AfterEligibilityDataComponent', () => {
  let component: AfterEligibilityDataComponent;
  let fixture: ComponentFixture<AfterEligibilityDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterEligibilityDataComponent]
    });
    fixture = TestBed.createComponent(AfterEligibilityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
