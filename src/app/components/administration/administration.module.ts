/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { AdministrationRouterModule } from './administration.router';
import { InfoheadModule } from '../infohead/infohead.module';
import { LoaderModule } from '../loader/loader.module';
import { TilesModule } from '../tiles/tiles.module';
import { NewsTileModule } from '../news-tile/news-tile.module';

/* importing components here */
import { WardensComponent } from './wardens/wardens.component';
import { HecComponent } from './hec/hec.component';
import { MessComponent } from './mess/mess.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EventsComponent } from './events/events.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { MinutesRevealerComponent } from './minutes-revealer/minutes-revealer.component'

@NgModule({
	declarations: [
    WardensComponent,
    HecComponent,
    MessComponent,
    MaintenanceComponent,
    EventsComponent,
    AdvisoryComponent,
    MinutesRevealerComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AdministrationRouterModule,
		AutoSizeInputModule,
		InfoheadModule,
		LoaderModule,
		TilesModule,
		NewsTileModule
	]
})
export class AdministrationModule {}