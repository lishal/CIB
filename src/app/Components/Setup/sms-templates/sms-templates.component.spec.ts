import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesComponent } from './sms-templates.component';

describe('SmsTemplatesComponent', () => {
  let component: SmsTemplatesComponent;
  let fixture: ComponentFixture<SmsTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsTemplatesComponent]
    });
    fixture = TestBed.createComponent(SmsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
