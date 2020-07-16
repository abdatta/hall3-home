/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTileModule } from '../news-tile/news-tile.module'

/* importing components here */
import { MinutesRevealerComponent } from './minutes-revealer.component';

@NgModule({
  declarations: [
    MinutesRevealerComponent
  ],
  imports: [
    CommonModule,
    NewsTileModule
  ],
  exports: [
    MinutesRevealerComponent
  ]
})
export class MinutesRevealerModule {}
