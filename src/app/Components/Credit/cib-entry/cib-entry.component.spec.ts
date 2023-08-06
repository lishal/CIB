import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibEntryComponent } from './cib-entry.component';

describe('CibEntryComponent', () => {
  let component: CibEntryComponent;
  let fixture: ComponentFixture<CibEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibEntryComponent]
    });
    fixture = TestBed.createComponent(CibEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
