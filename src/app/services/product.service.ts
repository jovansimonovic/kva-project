import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "Sport" | "Work" | "Formal" | "Casual"
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  static dummyProductList: Array<Product> = [
    {
      id: 0,
      name: 'Brown t-shirt',
      price: 10,
      image: 'https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67034456_09.jpg?ts=1703239418849&imwidth=360&imdensity=2',
      description: "A minimalistic brown shirt made from breathable material",
      category: "Casual"
    },
    {
      id: 1,
      name: 'Black t-shirt',
      price: 10,
      image: 'https://contents.mediadecathlon.com/p2567760/06cf21e3f5a8a75af7ac0659729255e7/p2567760.jpg?format=auto&f=768x0',
      description: "A minimalistic black shirt made from breathable material",
      category: "Casual"
    },
    {
      id: 2,
      name: 'Gray & Black t-shirt',
      price: 14,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230906/eROP/64f81a3cddf7791519a779ad/-1117Wx1400H-461093327-grey-MODEL.jpg',
      description: "A gray shirt with abstract black accents",
      category: "Casual"
    },
    {
      id: 3,
      name: 'White & Black polo shirt',
      price: 16.99,
      image: 'https://www.ottostore.com/cdn/shop/files/Shot-11_400x.jpg?v=1711441230',
      description: "A white polo shirt with black and gray floral details",
      category: "Casual"
    },
    
  ];

  // returns all products
  getAllProducts() {
    return ProductService.dummyProductList;
  }
}
