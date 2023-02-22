import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  counter: number = 0;


  ngOnInit(): void {
    this._cartService.currentCount.subscribe(
      (value) => this.counter = value,
      (error) => console.log(error)
    );
  }
}
