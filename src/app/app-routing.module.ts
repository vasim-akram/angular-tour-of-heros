import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy'
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
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
    CanDeactivateGuard, SelectivePreloadingStrategy, AuthService 
  ]
})
export class AppRoutingModule {}