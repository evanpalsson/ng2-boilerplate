import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";

@NgModule ({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [BrowserModule, routing],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {}
