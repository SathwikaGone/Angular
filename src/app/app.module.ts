import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import UsersServiceService from './users-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileitemComponent } from './profileitem/profileitem.component';
@NgModule({
  declarations: [AppComponent, ProfileComponent, ProfiledetailComponent, ProfileitemComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
