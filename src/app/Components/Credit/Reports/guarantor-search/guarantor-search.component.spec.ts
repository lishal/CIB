import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorSearchComponent } from './guarantor-search.component';

describe('GuarantorSearchComponent', () => {
  let component: GuarantorSearchComponent;
  let fixture: ComponentFixture<GuarantorSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuarantorSearchComponent]
    });
    fixture = TestBed.createComponent(GuarantorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
