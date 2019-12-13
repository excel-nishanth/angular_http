import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];
  heroes1: Hero[] = [];

  getHeroes2(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  getHeroes3(): void {
    this.heroService.getHeroes2()
      .subscribe(heroes1 => this.heroes1 = heroes1.slice(0, 5));
  }

  ngOnInit() {
    this.getHeroes3();
    this.getHeroes2();
  }

}
