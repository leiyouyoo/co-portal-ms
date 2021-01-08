import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInputSearchComponent } from './header-input-search.component';

describe('HeaderInputSearchComponent', () => {
  let component: HeaderInputSearchComponent;
  let fixture: ComponentFixture<HeaderInputSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderInputSearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
