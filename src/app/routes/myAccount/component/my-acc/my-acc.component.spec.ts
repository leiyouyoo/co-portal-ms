import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccComponent } from './my-acc.component';

describe('MyAccComponent', () => {
  let component: MyAccComponent;
  let fixture: ComponentFixture<MyAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
