import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSTemplatesComponent } from './add.component';

describe('AddSTemplatesComponent', () => {
  let component: AddSTemplatesComponent;
  let fixture: ComponentFixture<AddSTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSTemplatesComponent]
    });
    fixture = TestBed.createComponent(AddSTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
