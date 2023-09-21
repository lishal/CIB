import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IffVersionComponent } from './iff-version.component';

describe('IffVersionComponent', () => {
  let component: IffVersionComponent;
  let fixture: ComponentFixture<IffVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IffVersionComponent]
    });
    fixture = TestBed.createComponent(IffVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
