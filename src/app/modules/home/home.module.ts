/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'angular-owl-carousel';
import { NgxCarousel3dModule } from '../ngx-carousel-3d/ngx-carousel-3d.module';
import { HomeRouterModule } from './home.router';
import { FeedbackModule } from '../feedback/feedback.module';
import { LoaderModule } from '../loader/loader.module';
import { NewsTileModule } from '../news-tile/news-tile.module';
import { TilesModule } from '../tiles/tiles.module';

/* importing components here */
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AdministrationComponent } from './administration/administration.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    FacilitiesComponent,
    AdministrationComponent,
    TopnewsComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    OwlModule,
    NgxCarousel3dModule,
    HomeRouterModule,
    FeedbackModule,
    LoaderModule,
    NewsTileModule,
    TilesModule
  ]
})
export class HomeModule {}
