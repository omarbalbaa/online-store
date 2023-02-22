import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private countSubject = new BehaviorSubject(0);
  currentCount = this.countSubject.asObservable();

  increaseCount(count:number){
    this.countSubject.next(count);
  }
}
