import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FightersService } from '../services/fighters/fighters.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  fighters:Array<object>;

  constructor( private fightersService: FightersService) { }

  ngOnInit() {
    this.fightersService.get().subscribe(res => {
      this.fighters = res;
      console.log(res);
      console.log(this.fighters);
    });
  }

}
