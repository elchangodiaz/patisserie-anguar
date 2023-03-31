import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return [
      '/assets/bebidas.png',
      '/assets/cake.png',
      '/assets/cake2.png',
      '/assets/carnes.png',
      '/assets/panes.png',
      '/assets/pastel.png',
      '/assets/pay.png',
    ]
  }

}
