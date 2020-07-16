import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importing components here */
import { FeedbackComponent } from './feedback.component';
import { AthComponent } from './ath/ath.component';
import { LnfComponent } from './lnf/lnf.component';
import { ResponseComponent } from './response/response.component';
import { ReportComponent } from './report/report.component';

const feedbackRoutes: Routes = [
  { path: '', redirectTo: 'ath', pathMatch: 'full' },
  { path: 'ath', component: FeedbackComponent, data: { form: 'ath' } },
  { path: 'responses', component: FeedbackComponent, data: { form: 'responses' } },
  { path: 'lnf', component: FeedbackComponent, data: { form: 'lnf' }  },
  { path: 'response/:id', component: ResponseComponent  },
  { path: 'report/:id', component: ReportComponent  }
]

@NgModule({
  imports: [
    RouterModule.forChild(feedbackRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeedbackRouterModule {}
