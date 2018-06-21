import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CalciService} from '../calci.service';
declare var calculatorComputation: any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalciService]
})
export class CalculatorComponent implements OnInit, AfterViewInit {

  elementArray: any[] = [];
  @ViewChild('input', {read: ElementRef}) displayComp: ElementRef;
  calciInstance: any;

  constructor(public calciService: CalciService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.calciService.getData().subscribe((data) => this.elementArray = <any>data);
  }

  onNumberClick(data: any) {
    this.calciInstance.onNumberClick(data);
  }

  onOperatorClick(data: any) {
    this.calciInstance.onOperatorClick(data);
  }

  ngAfterViewInit() {
    this.calciInstance = new calculatorComputation({displayComp: this.displayComp.nativeElement.getElementsByTagName('input')[0]});
  }

}
