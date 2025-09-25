import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input() value: any;
  @Input() age: any;

  @Output() childMessage = new EventEmitter<any>();
  @Output() numberC = new EventEmitter<number>();

  
  sending_number(){
    this.numberC.emit(8);
  }

  sending(){
    this.childMessage.emit('i am child message');
  }



}
