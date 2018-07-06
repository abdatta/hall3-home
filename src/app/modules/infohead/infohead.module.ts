/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* importing components here */
import { InfoheadComponent } from './infohead.component';

@NgModule({
  declarations: [
    InfoheadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoheadComponent
  ]
})
export class InfoheadModule {}
