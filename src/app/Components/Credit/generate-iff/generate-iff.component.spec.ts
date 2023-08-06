import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateIffComponent } from './generate-iff.component';

describe('GenerateIffComponent', () => {
  let component: GenerateIffComponent;
  let fixture: ComponentFixture<GenerateIffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateIffComponent]
    });
    fixture = TestBed.createComponent(GenerateIffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
