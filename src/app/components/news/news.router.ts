import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

/* importing guards here */
import { UsersGuard } from '../../auth.guard';

const newsRoutes: Routes = [
  { path: '', redirectTo: 'category/all', pathMatch: 'full' },
  { path: 'add', component: AddNewsComponent, canActivate: [ UsersGuard ] },
  { path: 'edit/:id', component: EditNewsComponent, canActivate: [ UsersGuard ] },
  { path: 'category/:cat', component: NewsComponent },
  { path: 'single/:id', component: SingleNewsComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRouterModule {}