import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLookupIffVersionComponent } from './edit.component';

describe('EditLookupIffVersionComponent', () => {
  let component: EditLookupIffVersionComponent;
  let fixture: ComponentFixture<EditLookupIffVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLookupIffVersionComponent]
    });
    fixture = TestBed.createComponent(EditLookupIffVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
