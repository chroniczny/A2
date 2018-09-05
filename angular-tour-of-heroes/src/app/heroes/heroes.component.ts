import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { AppId } from '../appId'; //type
import { IntercomService } from '../intercom.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;
  ids: AppId[];


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // console.log(hero.id);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // Observable.subscribe() to wait for async. getting the observable value (array of heroes)
  }

  bootIntercome(): void {
    this.intercomService.getIds()
      .subscribe(ids => {
        this.ids = ids;
        console.log(ids[0].id);
        this.insertId(ids[0].id);
      });
  }

  insertId(id: string) {
    // @ts-ignore
    window.intercomSettings = {
      app_id: id
    };

    // @ts-ignore
    window.Intercom('boot', {
      app_id: id,
      custom_launcher_selector: '#my_custom_link'
    })
  }
  
  constructor(private heroService: HeroService, private intercomService: IntercomService) {
  }

  ngOnInit() {
    this.getHeroes();
    this.bootIntercome();
  }

}
