import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { appRoutes } from "./routes";
import { AlertifyService } from "./_services/alertify.service";
import { AuthService } from "./_services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
  providers: [
    AuthService, 
    AlertifyService,
    AuthGuard,
    PreventUnsavedChanges,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
