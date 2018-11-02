import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTING } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NaviagtionComponent } from './naviagtion/naviagtion.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ItemCardComponent } from './admin/item-card/item-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    LoginComponent,
    NaviagtionComponent,
    SideBarComponent,
    AdminHomeComponent,
    ItemCardComponent,
  ],
  imports: [
    BrowserModule,
      ROUTING,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
