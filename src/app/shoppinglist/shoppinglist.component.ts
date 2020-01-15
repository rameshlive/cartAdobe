import { PricePipe } from './../price.pipe';
import { CartService } from './../service/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  field = "price";
  order = "desc";

  products : any[];

  constructor(private _cartService:CartService,private _router:Router){
  }
  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
    this._cartService.getProdcuts().subscribe((data: any[]) => {
        this.products = data;
    });
  }

  eventfromsorting(values:string){
    this.field = values[0];
    this.order = values[1];
  }

  addtoCart(id:number){
    let addnewItem = this.products.filter((item) => item.id == id);
    this._cartService.addItem(addnewItem[0]);
    this._router.navigate(['orders']);
  }
}
