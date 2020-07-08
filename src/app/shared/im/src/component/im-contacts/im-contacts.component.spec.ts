import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImContactsComponent } from './im-contacts.component';

describe('ImContactsComponent', () => {
  let component: ImContactsComponent;
  let fixture: ComponentFixture<ImContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
