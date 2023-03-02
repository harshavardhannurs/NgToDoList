import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() includeItem = new EventEmitter<{name:string}>();
  enteredItem:string = '';

  handleSubmitClick(){
    if(this.enteredItem.trim().length === 0)
    {
      return;
    }
    this.includeItem.emit({name:this.enteredItem});
    this.enteredItem = '';
  }
}
