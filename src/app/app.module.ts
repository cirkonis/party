import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import {PartyService} from './party/party.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PartyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
