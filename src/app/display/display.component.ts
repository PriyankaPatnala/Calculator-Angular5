import {Component, OnInit, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@ViewChild('input') input;
  constructor() { }

  ngOnInit() {
  }

}
