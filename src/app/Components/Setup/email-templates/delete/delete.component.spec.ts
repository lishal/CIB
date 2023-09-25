import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteETemplatesComponent } from './delete.component';

describe('DeleteETemplatesComponent', () => {
  let component: DeleteETemplatesComponent;
  let fixture: ComponentFixture<DeleteETemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteETemplatesComponent]
    });
    fixture = TestBed.createComponent(DeleteETemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
