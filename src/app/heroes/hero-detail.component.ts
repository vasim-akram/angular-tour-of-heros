import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { slideInDownAnimation } from '../animations';

import { Hero, HeroService }  from './hero.service';

@Component({
    template: `
    <h2>HEROES</h2>
    <div *ngIf="hero$ | async as hero">
      <h3>"{{ hero.name }}"</h3>
      <div>
        <label>Id: </label>{{ hero.id }}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <p>
        <button (click)="gotoHeroes(hero)">Back</button>
      </p>
    </div>
    `
})
export class HeroDetailComponent implements OnInit  {
    hero$: Observable<Hero>;

    constructor(
       private route: ActivatedRoute,
       private router: Router,
       private heroService: HeroService    
    ){}

    ngOnInit(){
        this.hero$ =this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.heroService.getHero(params.get('id'));
            }) 
    }

    gotoHeroes(hero: Hero){
        let heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes',{id: heroId, foo: 'foo'}]);
    }
}