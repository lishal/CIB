import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentReportComponent } from './segment-report.component';

describe('SegmentReportComponent', () => {
  let component: SegmentReportComponent;
  let fixture: ComponentFixture<SegmentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentReportComponent]
    });
    fixture = TestBed.createComponent(SegmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
