import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImShipmentStepComponent } from './im-shipment-step.component';

describe('ImShipmentStepComponent', () => {
  let component: ImShipmentStepComponent;
  let fixture: ComponentFixture<ImShipmentStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImShipmentStepComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImShipmentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
