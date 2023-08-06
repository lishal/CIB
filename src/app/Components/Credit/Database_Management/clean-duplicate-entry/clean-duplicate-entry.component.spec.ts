import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanDuplicateEntryComponent } from './clean-duplicate-entry.component';

describe('CleanDuplicateEntryComponent', () => {
  let component: CleanDuplicateEntryComponent;
  let fixture: ComponentFixture<CleanDuplicateEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleanDuplicateEntryComponent]
    });
    fixture = TestBed.createComponent(CleanDuplicateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
