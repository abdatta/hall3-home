/* importing modules here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRouterModule } from './user.router';
import { LoaderModule } from '../loader/loader.module';
import { NewsTileModule } from '../news-tile/news-tile.module';
import { InfoheadModule } from '../infohead/infohead.module';
import { AutoSizeInputModule } from 'ngx-autosize-input';

/* importing components here */
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { TransferComponent } from './transfer/transfer.component';
import { MailGroupsComponent } from './mail-groups/mail-groups.component';
import { MailGroupEditorComponent } from './mail-group-editor/mail-group-editor.component';

@NgModule({
  declarations: [
    SignupComponent,
    DashboardComponent,
    ChangePasswordComponent,
    AddNewsComponent,
    EditNewsComponent,
    TransferComponent,
    MailGroupsComponent,
    MailGroupEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRouterModule,
    LoaderModule,
    NewsTileModule,
    InfoheadModule,
    AutoSizeInputModule
  ]
})
export class UserModule {}
