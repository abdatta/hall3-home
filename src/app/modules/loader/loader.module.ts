/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* importing components here */
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule {}
