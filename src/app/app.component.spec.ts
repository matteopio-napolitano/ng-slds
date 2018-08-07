import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppTimelineComponent} from './app-timeline/app-timeline.component';
import {AppCardComponent} from './app-card/app-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent,
        AppTimelineComponent,
        AppCardComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
