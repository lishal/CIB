import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddETemplatesComponent } from './add.component';

describe('AddETemplatesComponent', () => {
  let component: AddETemplatesComponent;
  let fixture: ComponentFixture<AddETemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddETemplatesComponent]
    });
    fixture = TestBed.createComponent(AddETemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
