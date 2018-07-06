/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackRouterModule } from './feedback.router';
import { LoaderModule } from '../loader/loader.module';

/* importing components here */
import { FeedbackComponent } from './feedback.component';
import { AthComponent } from './ath/ath.component';
import { LnfComponent } from './lnf/lnf.component';
import { ResponseComponent } from './response/response.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    FeedbackComponent,
    AthComponent,
    LnfComponent,
    ResponseComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeedbackRouterModule,
    LoaderModule
  ],
  exports: [
    FeedbackComponent
  ]
})
export class FeedbackModule {}
