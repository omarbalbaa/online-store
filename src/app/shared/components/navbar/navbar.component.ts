import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router, private _cartService: CartService) {}

  counter: number = 0;
  ngOnInit(): void {
    this._cartService.currentCount.subscribe(
      (value) => this.counter = value,
      (error) => console.log(error)
    );
  }

  routerToLogin() {
    this._router.navigate(['/auth/login']);
  }
  routerToRegister() {
    this._router.navigate(['/auth/register']);
  }
}
