import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImBookingDetailComponent } from './im-booking-detail.component';

describe('ImBookingDetailComponent', () => {
  let component: ImBookingDetailComponent;
  let fixture: ComponentFixture<ImBookingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImBookingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
