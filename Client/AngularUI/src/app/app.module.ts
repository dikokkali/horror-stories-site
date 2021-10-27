import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { StoryComponent } from './stories/story/story.component';
import { StoryPaneComponent } from './stories/story-pane/story-pane.component';
import { AboutComponent } from './core/pages/about/about.component';
import { WitnessReportsComponent } from './core/pages/witness-reports/witness-reports.component';
import { ReportFiltersComponent } from './core/components/report-filters/report-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoryComponent,
    StoryPaneComponent,
    AboutComponent,
    WitnessReportsComponent,
    ReportFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
