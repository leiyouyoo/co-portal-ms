import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPopoverComponent } from './address-popover.component';

describe('AddressPopoverComponent', () => {
  let component: AddressPopoverComponent;
  let fixture: ComponentFixture<AddressPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
