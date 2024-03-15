import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
// import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: MapComponent },
  // { path: 'gallery', component: GalleryComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouterModule {}
