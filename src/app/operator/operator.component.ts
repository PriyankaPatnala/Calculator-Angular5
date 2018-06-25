import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {
@Input() data: string;

  @Output() operatorClick = new EventEmitter();

  onOperatorClick(data: string) {
    this.operatorClick.emit(data);
  }
}
