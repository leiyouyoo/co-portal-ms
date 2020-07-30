import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImFileListsComponent } from './im-file-lists.component';

describe('ImFileListsComponent', () => {
  let component: ImFileListsComponent;
  let fixture: ComponentFixture<ImFileListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImFileListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImFileListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
