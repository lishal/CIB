import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvinceComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditProvinceComponent;
  let fixture: ComponentFixture<EditProvinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProvinceComponent],
    });
    fixture = TestBed.createComponent(EditProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
