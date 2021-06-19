import { Component } from '@angular/core';
import animaldetails  from './files/animaldetails.json';
import groupdetails from './files/animalgroupdetails.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faunanation-ui';
  animalDetaillist:{name:String,category:String,food:String,isfoodeaten:number,age:number,timefood:String,timings:Array<String>}[] = animaldetails; 
  animalgrouplist:{name:String,number:number}[] = groupdetails;
}
