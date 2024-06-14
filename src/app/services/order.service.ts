import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface Order {
  id: number;
  createdAt: Date;
  orderedProducts: Array<Product>;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private static dummyOrderList: Array<Order> = [];

  maxId: number = 0;

  constructor() {}

  // returns all orders
  getAllOrders() {
    return OrderService.dummyOrderList;
  }

  // creates an order and pushes it to dummyOrderList array
  createOrder(cartItems: Product[]) {
    let price = cartItems.reduce((price, item) => {
      return price + item.price * item.quantity;
    }, 0);

    let order = {
      id: ++this.maxId,
      createdAt: new Date(),
      orderedProducts: cartItems,
      totalPrice: price,
    };

    OrderService.dummyOrderList.push(order);
  }
}
