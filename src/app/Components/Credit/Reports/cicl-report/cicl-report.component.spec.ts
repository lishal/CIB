import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclReportComponent } from './cicl-report.component';

describe('CiclReportComponent', () => {
  let component: CiclReportComponent;
  let fixture: ComponentFixture<CiclReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiclReportComponent]
    });
    fixture = TestBed.createComponent(CiclReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
