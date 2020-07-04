import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoryblokService } from './storyblok.service';

import { MarkdownModule } from 'ngx-markdown';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MarkdownModule.forRoot(),
    MatToolbarModule,
    ScullyLibModule,
  ],
  providers: [StoryblokService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
