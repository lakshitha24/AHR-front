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
import { DndListModule } from 'ngx-drag-and-drop-lists';
import { ContainerComponent } from './components/container.component';


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
      ContainerComponent,
  ],
  imports: [
    BrowserModule,
      ROUTING,
      FormsModule,
      ReactiveFormsModule,
      DndListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
