import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftySettingComponent } from './safty-setting.component';

describe('SaftySettingComponent', () => {
  let component: SaftySettingComponent;
  let fixture: ComponentFixture<SaftySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaftySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaftySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
