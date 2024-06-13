import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  manufacturer: string;
  category: 'T-shirt' | 'Shoes' | 'Shorts';
  size: 'S' | 'M' | 'L' | 'XL' | '40' | '41' | '42' | '43' ;
  quantity: number;
  addedDate: Date
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  static dummyProductList: Array<Product> = [
    {
      id: 0,
      name: 'Air Jordan 1 Low SE',
      price: 290,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30fdd49f-8d18-4d19-a82f-fec143c9eaca/air-jordan-1-low-se-shoes-WSkjPL.png',
      description: 'Here is some straightforward, good-looking AJ1s. Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole.',
      category: 'Shoes',
      manufacturer: "Nike",
      size : "42",
      addedDate: new Date('2024-06-12T08:00:00'),
      quantity: 0
    },
    {
      id: 1,
      name: 'Nike Air Force 1',
      price: 110.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
      description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best',
      category: 'T-shirt',
      manufacturer: "Nike",
      size : "41",
      addedDate: new Date('2024-06-12T08:00:00'),
      quantity: 0
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
      manufacturer: "Nike",
      size : "L",
      addedDate: new Date('2024-06-11T09:00:00'),
      quantity: 0
    },
    {
      id: 3,
      name: 'Los Angeles Lakers',
      price: 99.99,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d9aa1b6a-4385-4233-96b6-b03f5c83d1a6/los-angeles-lakers-icon-edition-2022-23-dri-fit-nba-swingman-jersey-SVQpm7.png',
      description:
        'This Los Angeles Lakers jersey is inspired by what the pros wear on the hardwood, from squad details to lightweight, sweat-wicking mesh',
      category: 'T-shirt',
      manufacturer: "Nike",
      size : "XL",
      addedDate: new Date('2024-06-10T04:00:00'),      
      quantity: 0
    },
    {
      id: 4,
      name: 'Nike Cortez Textile',
      price: 70,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c07084a-9a06-4a58-aa81-21ad0d33f678/cortez-textile-shoes-HhM7W9.png',
      description: 'Nike Cortez Textile helps you step through whatever the day brings, at your pace. ',
      category: 'Shoes',
      manufacturer: "Nike",
      size : "40",
      addedDate: new Date('2024-06-12T07:00:00'),
      quantity: 0
    },
    {
      id: 5,
      name: 'Nike basic shorts',
      price: 30,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/afea6369-7982-4fb1-b76f-0b1f152ec287/jordan-dri-fit-sport-diamond-shorts-TcL0vg.png',
      description: 'Made from light, breathable mesh with sweat-wicking technology, these shorts set you up with versatile wearability for your whole day, on or off the court.',
      category: 'Shorts',
      manufacturer: "Nike",
      size : "S",
      addedDate: new Date('2024-06-7T08:00:00'),
      quantity: 0
    },
    {
      id: 6,
      name: 'Nike Dunk High',
      price: 88.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      description: 'Lifestyle sneakers designed to bring retro style to modern age',
      category: 'Shoes',
      manufacturer: "Nike",
      size : "42",
      addedDate: new Date('2024-06-12T08:00:00'),
      quantity: 0
    },
    {
      id: 7,
      name: 'Nike Basic T-shirt',
      price: 19.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e83e284c-648b-422f-9020-517f898095c7/jordan-flight-mvp-reversible-mesh-jersey-pRhksD.png',
      description: 'Made from lightweight and breathable mesh, this reversible top gives you two looks in one',
      category: 'T-shirt',
      manufacturer: "Nike",
      size : "M",
      addedDate: new Date('2024-06-12T08:00:00'),
      quantity: 0
    },
    {
      id:8,
      name: 'Nike Shorts O7',
      price: 25.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f37f3009-7729-4dce-a2f0-b01697fbc3f9/flex-stride-run-energy-13cm-brief-lined-running-shorts-NSbZL8.png',
      description: 'Light and breathable with a supportive brief liner, these shorts feature "Stop Pre" graphics that keep Pres rebel spirit alive.',
      category: 'Shorts',
      manufacturer: "Nike",
      size : "L",
      addedDate: new Date('2024-06-6T08:00:00'),
      quantity: 0
    },
    {
      id: 9,
      name: 'Nike Dry Shorts',
      price: 29.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2264a97b-848e-4278-8733-3c46da5c1a0c/dri-fit-golf-shorts-QNrCtG.png',
      description: 'Stretchy fabric lets you line up your putts without restriction and a tacky waistband helps keep your shirt tucked in while you bend and swing.',
      category: 'Shorts',
      manufacturer: "Nike",
      size : "M",
      addedDate: new Date('2024-06-10T08:00:00'),
      quantity: 0
    }
  ];

  // returns all products
  getAllProducts() {
    return ProductService.dummyProductList;
  }

  // returns product based on the provided id
  getProductById(id: number): Product {
    let foundProduct!: Product;

    ProductService.dummyProductList.find((product) => {
      if (product.id === id) {
        foundProduct = product;
      }
    });

    return foundProduct;
  }
}
