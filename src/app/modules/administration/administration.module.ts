/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { NgxCropperModule } from '../../../../ngx-cropper/ngx-cropper.module';
import { AdministrationRouterModule } from './administration.router';
import { InfoheadModule } from '../infohead/infohead.module';
import { LoaderModule } from '../loader/loader.module';
import { TilesModule } from '../tiles/tiles.module';
import { NewsTileModule } from '../news-tile/news-tile.module';
import { MinutesRevealerModule } from '../minutes-revealer/minutes-revealer.module';

/* importing components here */
import { WardensComponent } from './wardens/wardens.component';
import { HecComponent } from './hec/hec.component';
import { ExHecComponent } from './ex_hec/ex_hec.component';
import { HallOfficeComponent } from './hall_office/hall_office.component';
import { MessComponent } from './mess/mess.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EventsComponent } from './events/events.component';
import { AdvisoryComponent } from './advisory/advisory.component';

@NgModule({
  declarations: [
    WardensComponent,
    HecComponent,
    // ExHecComponent,
    HallOfficeComponent,
    MessComponent,
    MaintenanceComponent,
    EventsComponent,
    AdvisoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRouterModule,
    AutoSizeInputModule,
    NgxCropperModule,
    InfoheadModule,
    LoaderModule,
    TilesModule,
    NewsTileModule,
    MinutesRevealerModule
  ]
})
export class AdministrationModule {}
