import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/* importing guards here */
import {UsersGuard, LogInGuard, AdminGuard, LevelGuard} from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'facility', component: InfoComponent , data: { infoId: 'facilities' },
    loadChildren: './modules/facilities/facilities.module#FacilitiesModule'
  },
  {
    path: 'administration', component: InfoComponent , data: { infoId: 'administration' },
    loadChildren: './modules/administration/administration.module#AdministrationModule'
  },
  {
    path: 'people', component: InfoComponent , data: { infoId: 'people' },
    loadChildren: './modules/people/people.module#PeopleModule'
  },
  {
    path: 'notices',
    loadChildren: './modules/news/news.module#NewsModule'
  },
  {
    path: 'feedback',
    loadChildren: './modules/feedback/feedback.module#FeedbackModule'
  },
  {
    path: 'login', component: LoginComponent, canActivate: [ LogInGuard ]
  },
  {
    path: 'user', canActivate: [ UsersGuard ],
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'response/:id', redirectTo: 'feedback/response/:id'
  },
  {
    path: '',
    loadChildren:  './modules/home/home.module#HomeModule'
  },
  {
    path: '**' , component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
