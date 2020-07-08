import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgElementComponent } from './img-element.component';

describe('ImgElementComponent', () => {
  let component: ImgElementComponent;
  let fixture: ComponentFixture<ImgElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
