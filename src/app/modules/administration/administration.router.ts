import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { HecComponent } from './hec/hec.component';
import { MessComponent } from './mess/mess.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EventsComponent } from './events/events.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { HallOfficeComponent } from './hall-office/hall-office.component';

const administrationRoutes: Routes = [
  { path: '', redirectTo: 'hec', pathMatch: 'full'},
  { path: 'hec', component: HecComponent },
  { path: 'mess', component: MessComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'activity', component: EventsComponent },
  { path: 'advisory', component: AdvisoryComponent },
  { path: 'hall-office', component: HallOfficeComponent }
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