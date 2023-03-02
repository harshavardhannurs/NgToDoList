import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() addedItem:{name:string}; 
  @Input() index:number;
  @Output() removeItem = new EventEmitter<{index:number}>();

  handleRemove(index){
    this.removeItem.emit({index:index})
  }
}
