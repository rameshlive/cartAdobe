import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders:any[];
  getTotal : number[];
  totalAmount : number;
  noitems : boolean = false;
  negativeValue : boolean = true;
  constructor(private _cartService:CartService) {
   
   }

  ngOnInit() {
    this.orders = this._cartService.getCartItems();
    this.totalAmount = this._cartService.getTotal();
  }

  removeItem(id){
    this._cartService.removeItem(id);
    this.orders = this._cartService.getCartItems();
    this.totalAmount = this._cartService.getTotal();
  }

  removeCartItem(id,itemValue){
    if(itemValue <= 1){
      this.negativeValue = false;
      return false;
    }else{
      this.negativeValue = true;
    }
    this._cartService.removeCartItem(id);
    this.orders = this._cartService.getCartItems();
    this.totalAmount = this._cartService.getTotal();
  }
  addProductCount(id){
    let addnewItem = this.orders.filter((item) => item.id == id);
    this._cartService.addItem(addnewItem[0]);
    this.orders = this._cartService.getCartItems();
    this.totalAmount = this._cartService.getTotal();
  }

}
