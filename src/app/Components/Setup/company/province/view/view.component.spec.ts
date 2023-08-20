import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProvinceComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewProvinceComponent;
  let fixture: ComponentFixture<ViewProvinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProvinceComponent],
    });
    fixture = TestBed.createComponent(ViewProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
