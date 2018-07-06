import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';

/* importing guards here */
import { AdminGuard, LevelGuard } from '../../auth.guard';

const userRoutes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [ AdminGuard ] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'notice/add', component: AddNewsComponent },
  { path: 'notice/edit/:id', component: EditNewsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouterModule {}
