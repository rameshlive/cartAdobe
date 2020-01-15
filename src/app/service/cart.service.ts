import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  count = 0;
  countChange: Subject<number> = new Subject<number>();
  API_URL = 'https://api.myjson.com/bins/qzuzi';
  total : number;

  cartItems:any[];

  constructor(private _httpClient:HttpClient) {
    this.cartItems = [];
    this.count = 0;
  }

  getProdcuts(){
    return this._httpClient.get(`${this.API_URL}`);
  }
  
  addItem(newItem){
    var oldItems = JSON.parse(localStorage.getItem('keyValue')) || [];
    var removeIndex = oldItems.map(function(item) { return item.id; }).indexOf(newItem.id);
    console.log(removeIndex)
    if(removeIndex === -1){
        newItem.productCount =  1;
        newItem.totalPrice = newItem.price;
        oldItems.push(newItem);
        this.getTotal();
        this.count = this.getItemCount();
        this.countChange.next(this.count);
        this.getCartItems();
    }else{
       oldItems.find((item)=> {
        if(item.id == newItem.id){
           item.productCount = item.productCount + 1;
           item.totalPrice = item.price * item.productCount;
           this.count = this.getItemCount();
           this.countChange.next(this.count);
           this.getCartItems();
         } 
       });
    }
    localStorage.setItem('keyValue', JSON.stringify(oldItems));
    this.getTotal();
    this.count = this.getItemCount();
    this.countChange.next(this.count);
    this.getCartItems();
  }

  removeItem(id){
    var oldItems = JSON.parse(localStorage.getItem('keyValue')) || [];
    var removeIndex = oldItems.map(function(item) { return item.id; }).indexOf(id);
    oldItems.splice(removeIndex, 1);
    localStorage.setItem('keyValue', JSON.stringify(oldItems));
    this.count = this.getItemCount();
    this.countChange.next(this.count);
    this.getCartItems();
  }

  removeCartItem(id){
    var oldItems = JSON.parse(localStorage.getItem('keyValue')) || [];
    var removeIndex = oldItems.map(function(item) { return item.id; }).indexOf(id);
    oldItems.find((item)=> {
      if(item.id == id){
         item.productCount = item.productCount - 1;
         item.totalPrice = item.price * item.productCount;
       } 
     });
    localStorage.setItem('keyValue', JSON.stringify(oldItems));
    this.count = this.getItemCount();
    this.countChange.next(this.count);
    this.getCartItems();
  }

  getTotal(){
    var oldItems = JSON.parse(localStorage.getItem('keyValue')) || [];
    this.total = oldItems.reduce((acc,obj) => {
      return acc + obj.totalPrice
     }, 0)
     console.log(this.total)
     return this.total;
  }

  getItemCount(){
    var oldItems = JSON.parse(localStorage.getItem('keyValue')) || [];
    this.count = oldItems.reduce((acc,obj) => {
      return acc + obj.productCount
     }, 0)
     console.log(this.count)
     return this.count;
  }
  getCartItems() {
     this.cartItems = JSON.parse(localStorage.getItem('keyValue'));
     return this.cartItems;
  } 

  
}
export interface cartCount {
  count:number;
}