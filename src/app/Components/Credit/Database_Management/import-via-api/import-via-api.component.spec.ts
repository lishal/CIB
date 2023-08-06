import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportViaApiComponent } from './import-via-api.component';

describe('ImportViaApiComponent', () => {
  let component: ImportViaApiComponent;
  let fixture: ComponentFixture<ImportViaApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportViaApiComponent]
    });
    fixture = TestBed.createComponent(ImportViaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
