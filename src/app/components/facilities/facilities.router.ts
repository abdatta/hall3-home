import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { GuestRoomComponent } from './guest-room/guest-room.component';
import { MessComponent } from './mess/mess.component';
import { ReadingRoomComponent } from './reading-room/reading-room.component';
import { TVRoomComponent } from './tvroom/tvroom.component';
import { ComputerRoomComponent } from './computer-room/computer-room.component';
import { SportsComponent } from './sports/sports.component';
import { MusicRoomComponent } from './music-room/music-room.component';
import { CanteenComponent } from './canteen/canteen.component';

const facilitiesRoutes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full'},
  { path: 'guest', component: GuestRoomComponent },
  { path: 'mess', component: MessComponent },
  { path: 'reading', component: ReadingRoomComponent },
  { path: 'tv', component: TVRoomComponent },
  { path: 'computer', component: ComputerRoomComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'music', component: MusicRoomComponent },
  { path: 'canteen', component: CanteenComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(facilitiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FacilitiesRouterModule {}