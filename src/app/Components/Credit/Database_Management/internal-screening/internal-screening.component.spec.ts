import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalScreeningComponent } from './internal-screening.component';

describe('InternalScreeningComponent', () => {
  let component: InternalScreeningComponent;
  let fixture: ComponentFixture<InternalScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalScreeningComponent]
    });
    fixture = TestBed.createComponent(InternalScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
