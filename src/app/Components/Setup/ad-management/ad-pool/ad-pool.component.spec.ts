import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPoolComponent } from './ad-pool.component';

describe('AdPoolComponent', () => {
  let component: AdPoolComponent;
  let fixture: ComponentFixture<AdPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdPoolComponent]
    });
    fixture = TestBed.createComponent(AdPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
