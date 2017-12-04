import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }