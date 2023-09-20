import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVRelationshipComponent } from './view.component';

describe('ViewVRelationshipComponent', () => {
  let component: ViewVRelationshipComponent;
  let fixture: ComponentFixture<ViewVRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVRelationshipComponent]
    });
    fixture = TestBed.createComponent(ViewVRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
