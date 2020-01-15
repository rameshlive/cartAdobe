import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1000;
  min = 100;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 100;
  vertical = false;

 
  private _tickInterval = 1;
  constructor() { }

  ngOnInit() {
  }
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  onInputChange(event: any){
      console.log(event.value)
  }

}
