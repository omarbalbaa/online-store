import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from './assets/products-array.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: {
    id: number;
    image: string;
    title: string;
    category: string;
    price: number;
  } = { id: 0, image: '', title: '', category: '', price: 0 };

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this._route.snapshot.params);
    this.checkID();
  }

  checkID() {
    for (let i = 0; i < data.length; i++) {
      if (this._route.snapshot.params == { "id": `${data.id}` }) {
        const x = data[i].id;
        const t = data[i].title;
        const y = data[i].category;
        const z = data[i].price;
        const img = data[i].image;
        this.product = { id: x, image: img, title: t, category: y, price: z };
      }
    }
    console.log(this.product);
  }
}
