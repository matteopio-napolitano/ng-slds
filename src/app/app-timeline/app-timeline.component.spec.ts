import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTimelineComponent } from './app-timeline.component';

describe('AppTimelineComponent', () => {
  let component: AppTimelineComponent;
  let fixture: ComponentFixture<AppTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
