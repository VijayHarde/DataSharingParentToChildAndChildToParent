import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit,OnChanges {

  @Input() parentData:string;
  @Output() secondChildEvent = new EventEmitter<String>();
  data:string[] = [];
  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes:SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log("----cur-------",cur);
      console.log("-----Privious-------",prev);
      if(prev) {
        console.log("Data Pushed");
        this.data.push(cur);
      }
    }
  }

  /**
   * This method will emit the data whenever the ionchange event triggers.
   * @param event 
   */
  secondChildChnaged(event) {
    this.secondChildEvent.emit(event.target.value);
  }


}
