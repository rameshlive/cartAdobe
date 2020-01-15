import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrls: ['./carticon.component.scss']
})
export class CarticonComponent implements OnInit {

  totalItems : number = 0;
  _subscribtion;
  constructor(public _cartService:CartService) { 
    this._subscribtion =   this._cartService.countChange.subscribe((value) => { 
      this.totalItems = value; 
    });
  }

  ngOnInit() {
    this._cartService.countChange.subscribe((value) => { 
      this.totalItems = value; 
    });
  }

  ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._subscribtion.unsubscribe();
  }
}
