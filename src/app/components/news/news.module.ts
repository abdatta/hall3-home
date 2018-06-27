/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsRouterModule } from './news.router';
import { LoaderModule } from '../loader/loader.module';
import { NewsTileModule } from '../news-tile/news-tile.module';

/* importing components here */
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
	declarations: [
    NewsComponent,
    AddNewsComponent,
    EditNewsComponent,
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