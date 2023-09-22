import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLookupIffVersionComponent } from './add.component';

describe('AddLookupIffVersionComponent', () => {
  let component: AddLookupIffVersionComponent;
  let fixture: ComponentFixture<AddLookupIffVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLookupIffVersionComponent]
    });
    fixture = TestBed.createComponent(AddLookupIffVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
