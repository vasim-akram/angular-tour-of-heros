import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { Route } from '@angular/compiler/src/core';
import { CrisisListComponent } from './crisis-center/crisis-list.component';
import { HeroListComponent } from './heros/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent },
  {path: 'heroes', component: HeroListComponent },
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }