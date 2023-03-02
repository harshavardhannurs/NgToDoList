import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsList = [];

  onIncludedItem(event:{name:string}){
    console.log(event)
    console.log(this.itemsList)
    this.itemsList.push({name:event.name});
  }

  onRemoveItem(event:{index:number}){
    this.itemsList.splice(event.index, 1);
  }

}
