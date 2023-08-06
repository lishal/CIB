import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleMatchingComponent } from './handle-matching.component';

describe('HandleMatchingComponent', () => {
  let component: HandleMatchingComponent;
  let fixture: ComponentFixture<HandleMatchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleMatchingComponent]
    });
    fixture = TestBed.createComponent(HandleMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
