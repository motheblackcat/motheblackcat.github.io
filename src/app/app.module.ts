import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavComponent } from './shared/nav/nav.component';

import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, WorkComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
