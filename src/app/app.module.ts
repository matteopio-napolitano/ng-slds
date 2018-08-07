import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppTimelineComponent } from './app-timeline/app-timeline.component';
import { AppCardComponent } from './app-card/app-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppTimelineComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
