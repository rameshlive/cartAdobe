import { CartService } from './service/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cartassignment';
  products : any[];
  constructor(private _cartService:CartService){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._cartService.getProdcuts().subscribe((data: any[]) => {
      this.products = data;
   });

  
  }
}
