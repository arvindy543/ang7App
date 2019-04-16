import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FightersService } from '../services/fighters/fighters.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  fighters:Array<object>;

  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
    
  }

}
