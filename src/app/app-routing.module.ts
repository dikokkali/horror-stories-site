import { WitnessReportsComponent } from './core/pages/witness-reports/witness-reports.component';

import { AboutComponent } from './core/pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'About', component: AboutComponent},
  {path: 'WitnessReports', component: WitnessReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
