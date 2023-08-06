import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibViewerComponent } from './cib-viewer.component';

describe('CibViewerComponent', () => {
  let component: CibViewerComponent;
  let fixture: ComponentFixture<CibViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibViewerComponent]
    });
    fixture = TestBed.createComponent(CibViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
