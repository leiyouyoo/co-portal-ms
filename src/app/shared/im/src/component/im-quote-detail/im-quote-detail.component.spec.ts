import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImQuoteDetailComponent } from './im-quote-detail.component';

describe('ImQuoteDetailComponent', () => {
  let component: ImQuoteDetailComponent;
  let fixture: ComponentFixture<ImQuoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImQuoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImQuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
