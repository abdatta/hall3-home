/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* importing components here */
import { NewsTileComponent } from './news-tile.component';

@NgModule({
  declarations: [
    NewsTileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NewsTileComponent
  ]
})
export class NewsTileModule {}
