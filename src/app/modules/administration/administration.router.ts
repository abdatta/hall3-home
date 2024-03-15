import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { HecComponent } from './hec/hec.component';
import { MessComponent } from './mess/mess.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EventsComponent } from './events/events.component';
import { AdvisoryComponent } from './advisory/advisory.component';
// import { ExHecComponent } from './ex_hec/ex_hec.component';
import { HallOfficeComponent } from './hall_office/hall_office.component';

const administrationRoutes: Routes = [
  { path: '', redirectTo: 'hec', pathMatch: 'full'},
  { path: 'hec', component: HecComponent },
  // { path: 'ex_hec', component: ExHecComponent },
  { path: 'mess', component: MessComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'activity', component: EventsComponent },
  { path: 'advisory', component: AdvisoryComponent },
  { path: 'hall_office', component: HallOfficeComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRouterModule {}
