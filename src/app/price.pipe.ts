import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(items: any, field : string , order : string): any {

    if (!items) return [];

    if(field){
      if(field == "price"){
        if( order == 'asc'){
          items.sort(function(a, b) { return a.price - b.price; })
        }
        else{
          items.sort(function(a, b) { return b.price - a.price; })
        }
      }
      if(field == 'discount'){
        items.sort(function(a, b) { return b.discount - a.discount; })
      }
    }


   
    
    return items;
  }

}
