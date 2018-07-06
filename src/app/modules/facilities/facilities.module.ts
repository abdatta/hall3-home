/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { FacilitiesRouterModule } from './facilities.router';
import { InfoheadModule } from '../infohead/infohead.module';
import { LoaderModule } from '../loader/loader.module';

/* importing components here */
import { GuestRoomComponent } from './guest-room/guest-room.component';
import { MessComponent } from './mess/mess.component';
import { ReadingRoomComponent } from './reading-room/reading-room.component';
import { TVRoomComponent } from './tvroom/tvroom.component';
import { ComputerRoomComponent } from './computer-room/computer-room.component';
import { SportsComponent } from './sports/sports.component';
import { MusicRoomComponent } from './music-room/music-room.component';
import { CanteenComponent } from './canteen/canteen.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    GuestRoomComponent,
    MessComponent,
    ReadingRoomComponent,
    TVRoomComponent,
    ComputerRoomComponent,
    SportsComponent,
    MusicRoomComponent,
    CanteenComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FacilitiesRouterModule,
    AutoSizeInputModule,
    InfoheadModule,
    LoaderModule,
  ]
})
export class FacilitiesModule {}
