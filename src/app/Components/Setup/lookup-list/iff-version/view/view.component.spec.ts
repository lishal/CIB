import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLookupIffVersionComponent } from './view.component';

describe('ViewLookupIffVersionComponent', () => {
  let component: ViewLookupIffVersionComponent;
  let fixture: ComponentFixture<ViewLookupIffVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLookupIffVersionComponent]
    });
    fixture = TestBed.createComponent(ViewLookupIffVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
