import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisService }        from './crisis.service';

import { CrisisCenterComponent }     from './crisis.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-home.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CrisisCenterRoutingModule } from './crises-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule {}
