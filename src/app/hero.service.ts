import { MainComponent } from './main/main.component';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  logStatusChange(value){
    console.log(value)
  }
  constructor() { }
}
