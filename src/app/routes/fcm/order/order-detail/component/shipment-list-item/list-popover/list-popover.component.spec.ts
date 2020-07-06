import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopoverComponent } from './list-popover.component';

describe('ListPopoverComponent', () => {
  let component: ListPopoverComponent;
  let fixture: ComponentFixture<ListPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPopoverComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
