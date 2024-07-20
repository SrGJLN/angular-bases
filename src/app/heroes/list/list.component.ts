import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Ironman', 'Hulk', 'Thor', 'Spiderman'];
  public deleteHero?: string;
  removeLasHero():void{
    this.deleteHero = this.heroNames.pop();
  }
}
