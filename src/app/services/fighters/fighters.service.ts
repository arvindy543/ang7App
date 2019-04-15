import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightersService {
fighters: Array<object> = [
  { name: 'Conor McGregor', wins: 21, losses: 3 },
    { name: 'Tony Ferguson', wins: 23, losses: 3 },
    { name: 'Max Holloway', wins: 19, losses: 3 },
    { name: 'Jon Jones', wins: 22, losses: 1 },
    { name: 'Daniel Cormier', wins: 21, losses: 1 },
    { name: 'Brock Lesnar', wins: 5, losses: 3 }
]

  constructor() { }

  get() {
    return of(this.fighters);
  }
}
