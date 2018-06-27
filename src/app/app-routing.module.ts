import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { AboutComponent } from './components/about/about.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ResponseComponent } from './components/feedback/response/response.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MapComponent } from './components/map/map.component';
import { ReportComponent } from './components/feedback/report/report.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/* importing guards here */
import {UsersGuard, LogInGuard, AdminGuard, LevelGuard} from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facilities', component: FacilitiesComponent },
  {
    path: 'facility', component: InfoComponent , data: { infoId: 'facilities' },
    loadChildren: './components/facilities/facilities.module#FacilitiesModule'
  },
  {
    path: 'administration', component: InfoComponent , data: { infoId: 'administration' },
    loadChildren: './components/administration/administration.module#AdministrationModule'
  },
  {
    path: 'people', component: InfoComponent , data: { infoId: 'people' },
    loadChildren: './components/people/people.module#PeopleModule'
  },
  {
    path: 'notices',
    loadChildren: './components/news/news.module#NewsModule'
  },
  { path: 'feedback',
    children: [
      { path: '', redirectTo: 'ath', pathMatch: 'full' },
      { path: 'ath', component: FeedbackComponent, data: { form: 'ath' } },
      { path: 'responses', component: FeedbackComponent, data: { form: 'responses' } },
      { path: 'lnf', component: FeedbackComponent, data: { form: 'lnf' }  }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [ LogInGuard ] },
  { path: 'signup', component: SignupComponent, canActivate: [ AdminGuard ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ UsersGuard ] },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [ UsersGuard ] },
  { path: 'response/:id', component: ResponseComponent  },
  { path: 'report/:id', component: ReportComponent  },
  { path: 'map', component: MapComponent  },
  { path: '**' , component: NotFoundComponent }
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
