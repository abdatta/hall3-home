/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
		AutoSizeInputModule
	],
	exports: [
		TilesComponent
	]
})
export class TilesModule {}
