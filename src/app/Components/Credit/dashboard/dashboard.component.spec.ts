import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDashboardComponent } from './dashboard.component';

describe('CreditDashboardComponent', () => {
  let component: CreditDashboardComponent;
  let fixture: ComponentFixture<CreditDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditDashboardComponent],
    });
    fixture = TestBed.createComponent(CreditDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
