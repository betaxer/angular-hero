/**
 * Created by vincent on 19/03/2017.
 */

import {Component, Input, OnInit} from '@angular/core'
import {Hero} from "./hero";
import {Location} from  '@angular/common'
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <button (click)="save()">Save</button>
            <button (click)="goBack()">Back</button>
        </div>
    `,
    styleUrls: ['./app/hero-detail.component.css'],

})

export class HeroDetailComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
            this.route.params
                .switchMap((params: Params) =>
                    this.heroService.getHero(+params['id']))
                .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
    }
}
