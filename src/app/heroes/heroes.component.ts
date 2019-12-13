import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // constructor() { }
  constructor(private heroService: HeroService) { }

  hero1 = 'Nishanth J';

  hero: Hero = {
    id : 1,
    name : 'SuperMan'
  };

  heroes = HEROES;


  selectedHero: Hero;

  heroes2: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  // getHeroes(): void {
  //   this.heroes2 = this.heroService.getHeroes();
  // }

  // The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.
  getHeroes(): void {
    this.heroService.getHeroes2()
        .subscribe(heroes2 => this.heroes2 = heroes2);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes2.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes2.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


  ngOnInit() {
    this.getHeroes();
  }

}
