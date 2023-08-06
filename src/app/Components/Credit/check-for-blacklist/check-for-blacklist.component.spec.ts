import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckForBlacklistComponent } from './check-for-blacklist.component';

describe('CheckForBlacklistComponent', () => {
  let component: CheckForBlacklistComponent;
  let fixture: ComponentFixture<CheckForBlacklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckForBlacklistComponent]
    });
    fixture = TestBed.createComponent(CheckForBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
