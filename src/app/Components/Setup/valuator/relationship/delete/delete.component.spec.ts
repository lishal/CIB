import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVRelationshipComponent } from './delete.component';

describe('DeleteVRelationshipComponent', () => {
  let component: DeleteVRelationshipComponent;
  let fixture: ComponentFixture<DeleteVRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVRelationshipComponent]
    });
    fixture = TestBed.createComponent(DeleteVRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
