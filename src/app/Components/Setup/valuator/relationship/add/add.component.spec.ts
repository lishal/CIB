import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVRelationshipComponent } from './add.component';

describe('AddVRelationshipComponent', () => {
  let component: AddVRelationshipComponent;
  let fixture: ComponentFixture<AddVRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVRelationshipComponent]
    });
    fixture = TestBed.createComponent(AddVRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
