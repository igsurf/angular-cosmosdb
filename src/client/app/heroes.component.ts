import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  addingHero = false;
  heroes: any = [];
  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  deleteHero(hero: Hero){
    this.heroService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  save(){
    if (this.addingHero){
      
    }
  }

  getHeroes() {
    return this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

}