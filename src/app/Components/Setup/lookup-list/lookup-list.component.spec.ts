import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupListComponent } from './lookup-list.component';

describe('LookupListComponent', () => {
  let component: LookupListComponent;
  let fixture: ComponentFixture<LookupListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupListComponent]
    });
    fixture = TestBed.createComponent(LookupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
