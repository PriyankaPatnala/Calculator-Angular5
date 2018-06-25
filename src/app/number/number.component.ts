import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  @Input() data: string;

  @Output() numClick = new EventEmitter();

  onNumberClick(data: string) {
    this.numClick.emit(data);
  }
}
