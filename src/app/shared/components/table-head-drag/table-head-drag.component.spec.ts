import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadDragComponent } from './table-head-drag.component';

describe('TableHeadDragComponent', () => {
  let component: TableHeadDragComponent;
  let fixture: ComponentFixture<TableHeadDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeadDragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
