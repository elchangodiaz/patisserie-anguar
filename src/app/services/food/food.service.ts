import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


        // '/assets/bebidas.png',
      // '/assets/cake.png',
      // '/assets/cake2.png',
      // '/assets/carnes.png',
      // '/assets/panes.png',
      // '/assets/pastel.png',
      // '/assets/pay.png',
  getAll():Foods[]{
    return [
      {
        id: 0,
        price: 130,
        name: 'Cono de Carnes',
        favorite: false,
        star: 4.5,
        tags: ['Desayuno', 'Carnes', 'Salados'],
        imageUrl: '/assets/carnes.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
      {
        id: 1,
        price: 300,
        name: 'Pastel de Fresas',
        favorite: false,
        star: 5,
        tags: ['Postres', 'Pasteles', 'dulces'],
        imageUrl: '/assets/cake.png',
        cookTime: '5-10',
        origins: ['francia'],
      },
      {
        id: 2,
        price: 80,
        name: 'frape',
        favorite: false,
        star: 2.5,
        tags: ['Bebidas', 'Frapes', 'dulces'],
        imageUrl: '/assets/bebidas.png',
        cookTime: '5-10',
        origins: ['mexico'],
      },
      {
        id: 3,
        price: 300,
        name: 'Pay limon',
        favorite: false,
        star: 4.5,
        tags: ['Postres', 'Pasteles', 'dulces'],
        imageUrl: '/assets/pay.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
      {
        id: 4,
        price: 80,
        name: 'Panes',
        favorite: false,
        star: 4.5,
        tags: ['Desayuno', 'Panes', 'dulces'],
        imageUrl: '/assets/panes.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
      {
        id: 5,
        price: 120,
        name: 'Pastel Chocolate',
        favorite: false,
        star: 4.5,
        tags: ['Postres', 'Pasteles', 'dulces'],
        imageUrl: '/assets/cake2.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
      {
        id: 6,
        price: 140,
        name: 'Pastel',
        favorite: false,
        star: 4.5,
        tags: ['Postres', 'Pasteles', 'dulces'],
        imageUrl: '/assets/pastel.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
      {
        id: 7,
        price: 120,
        name: 'Pastel Moras',
        favorite: false,
        star: 4.5,
        tags: ['Postres', 'Pasteles', 'dulces'],
        imageUrl: '/assets/cake3.png',
        cookTime: '5-10',
        origins: ['italy'],
      },
    ]
  }

}
