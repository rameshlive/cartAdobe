import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  sorting : string = "desc";

  @Output() changeSorting = new EventEmitter<string[]>()
  constructor() { }

  ngOnInit() {
  }

  sendSorting(value:any){
    let splitString = value.split(",");
    if(splitString[0] == 'discount'){
      this.sorting = 'discount';
    }else{
      this.sorting = splitString[1];
    }
    this.changeSorting.emit(splitString);
  }

}
