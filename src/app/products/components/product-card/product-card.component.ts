import { Component, OnInit } from '@angular/core';
import data from './assets/products-array.json';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products:{id:number;title:string; category:string; price:number}[] =[];

  constructor(private _cartService: CartService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    for(let i = 0;i<data.length;i++){
      const x = data[i].id;
      const t = data[i].title;
      const y = data[i].category;
      const z = data[i].price;
      
      this.products.push({id:x,title:t,category:y,price:z});
      console.log(this.products[i]);
    }


    for (const i of data){
      this.products.push(i);
    }
  }
  
  count: number = 0;

  addToCart(){
    this._cartService.increaseCount(++this.count);
  }

  readProducts() {
    let x;
    for(let i=0;i<this.products.length;i++){
      x = JSON.stringify(this.products[i]);
    }
  }
}
