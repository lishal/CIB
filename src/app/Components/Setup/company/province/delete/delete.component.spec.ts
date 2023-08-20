import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProvinceComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteProvinceComponent;
  let fixture: ComponentFixture<DeleteProvinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProvinceComponent],
    });
    fixture = TestBed.createComponent(DeleteProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
