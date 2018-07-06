/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsRouterModule } from './news.router';
import { LoaderModule } from '../loader/loader.module';
import { NewsTileModule } from '../news-tile/news-tile.module';

/* importing components here */
import { NewsComponent } from './news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    NewsComponent,
    SingleNewsComponent,
    UnsubscribeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewsRouterModule,
    LoaderModule,
    NewsTileModule
  ]
})
export class NewsModule {}
