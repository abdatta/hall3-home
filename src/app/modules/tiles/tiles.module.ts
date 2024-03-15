/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxCropperModule } from '../../../../ngx-cropper/ngx-cropper.module';
import { AutoSizeInputModule } from 'ngx-autosize-input';

/* importing components here */
import { TilesComponent } from './tiles.component';

@NgModule({
  declarations: [
    TilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCropperModule,
    AutoSizeInputModule
  ],
  exports: [
    TilesComponent
  ]
})
export class TilesModule {}
