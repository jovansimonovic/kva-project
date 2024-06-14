import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface Order {
  id: number;
  createdAt: Date;
  products: Array<Product>;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private static dummyOrderList: Array<Order> = [
    {
      id: 0,
      createdAt: new Date('2024-06-15T14:30:00'),
      //! for testing purposes, I hardcoded products array
      // todo: add items from cart here when "confirmOrder" is called
      products: [
        {
          id: 0,
          name: 'Air Jordan 1 Low SE',
          price: 290,
          image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30fdd49f-8d18-4d19-a82f-fec143c9eaca/air-jordan-1-low-se-shoes-WSkjPL.png',
          description:
            'Here is some straightforward, good-looking AJ1s. Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole.',
          category: 'Shoes',
          manufacturer: 'Nike',
          size: '42',
          addedDate: new Date('2024-06-12T08:00:00'),
          quantity: 0,
        },
        {
          id: 1,
          name: 'Nike Air Force 1',
          price: 110.99,
          image:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
          description:
            'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best',
          category: 'Shoes',
          manufacturer: 'Nike',
          size: '41',
          addedDate: new Date('2024-06-12T08:00:00'),
          quantity: 0,
        },
        {
          id: 2,
          name: 'Nike T-shirt',
          price: 20,
          image:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/donj54uqf82ku8x9qkui/sportswear-t-shirt-zmMkxS.png',
          description:
            'The Nike Sportswear T-Shirt sets you up with soft cotton jersey and a classic logo on the chest.',
          category: 'T-shirt',
          manufacturer: 'Nike',
          size: 'L',
          addedDate: new Date('2024-06-11T09:00:00'),
          quantity: 0,
        },
      ],
      totalPrice: 250,
    },
  ];

  constructor() {}

  // returns all orders
  getAllOrders() {
    return OrderService.dummyOrderList;
  }
}
