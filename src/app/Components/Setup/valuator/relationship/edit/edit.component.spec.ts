import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVRelationshipComponent } from './edit.component';

describe('EditVRelationshipComponent', () => {
  let component: EditVRelationshipComponent;
  let fixture: ComponentFixture<EditVRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVRelationshipComponent]
    });
    fixture = TestBed.createComponent(EditVRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
