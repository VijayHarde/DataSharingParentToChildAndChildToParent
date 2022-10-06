import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { concatAll } from 'rxjs-compat/operator/concatAll';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
})
export class FirstChildComponent implements OnInit,OnChanges {
  @Input() parentData:string;
  @Output() firstChildEvent = new EventEmitter<string>();
  data:string[] = []
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
  ionChange(event) {
    this.firstChildEvent.emit(event.target.value);
  }

}
