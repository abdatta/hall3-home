/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleRouterModule } from './people.router';
import { InfoheadModule } from '../infohead/infohead.module';
import { LoaderModule } from '../loader/loader.module';
import { TilesModule } from '../tiles/tiles.module';

/* importing components here */
import { CsCoreComponent } from './cs-core/cs-core.component';
import { SGComponent } from './sg/sg.component';
import { AMComponent } from './am/am.component';

@NgModule({
	declarations: [
    CsCoreComponent,
    SGComponent,
    AMComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		PeopleRouterModule,
		InfoheadModule,
		LoaderModule,
		TilesModule
	]
})
export class PeopleModule {}