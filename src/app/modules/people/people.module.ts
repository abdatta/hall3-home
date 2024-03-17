/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleRouterModule } from './people.router';
import { InfoheadModule } from '../infohead/infohead.module';
import { LoaderModule } from '../loader/loader.module';
import { TilesModule } from '../tiles/tiles.module';
import { NgxCropperModule } from '../ngx-cropper/ngx-cropper.module';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { MarkdownModule } from "ngx-markdown";

/* importing components here */
import { CsCoreComponent } from './cs-core/cs-core.component';
import { SGComponent } from './sg/sg.component';
import { AMComponent } from './am/am.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AlumniTilesComponent } from './alumni/alumni-tiles/alumni-tiles.component';
import { SinglePageComponent } from './alumni/single-page/single-page.component';

@NgModule({
  declarations: [
    CsCoreComponent,
    SGComponent,
    AMComponent,
    AlumniComponent,
    AlumniTilesComponent,
    SinglePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeopleRouterModule,
    InfoheadModule,
    LoaderModule,
    TilesModule,
    NgxCropperModule,
    AutoSizeInputModule,
    TextareaAutosizeModule,
    MarkdownModule.forRoot()
  ]
})
export class PeopleModule {}