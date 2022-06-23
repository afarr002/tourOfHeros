import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { MOCKHEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero
  heroes = MOCKHEROES

  constructor() { }

  ngOnInit() {
    console.log(this.heroes)
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
