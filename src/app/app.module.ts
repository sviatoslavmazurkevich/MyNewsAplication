import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NewsService } from './services/news.service';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import {Approutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    Approutes,
    MatCardModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
