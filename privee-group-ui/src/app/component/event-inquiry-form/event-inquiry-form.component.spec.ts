import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInquiryFormComponent } from './event-inquiry-form.component';

describe('EventInquiryFormComponent', () => {
  let component: EventInquiryFormComponent;
  let fixture: ComponentFixture<EventInquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventInquiryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventInquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
