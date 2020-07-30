import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImEmojiComponent } from './im-emoji.component';

describe('ImEmojiComponent', () => {
  let component: ImEmojiComponent;
  let fixture: ComponentFixture<ImEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
