import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWarehouseModalComponent } from './enter-warehouse-modal.component';

describe('EnterWarehouseModalComponent', () => {
  let component: EnterWarehouseModalComponent;
  let fixture: ComponentFixture<EnterWarehouseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterWarehouseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWarehouseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
