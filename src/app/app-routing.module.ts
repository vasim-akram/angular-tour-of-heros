import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crises.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}