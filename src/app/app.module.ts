import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { StoryPanelComponent } from './stories/story-panel/story-panel.component';
import { StoryCardComponent } from './stories/story-card/story-card.component';
import { AboutComponent } from './core/pages/about/about.component';
import { WitnessReportsComponent } from './core/pages/witness-reports/witness-reports.component';
import { ReportFiltersComponent } from './core/components/report-filters/report-filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoryPanelComponent,
    StoryCardComponent,
    AboutComponent,
    WitnessReportsComponent,
    ReportFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
