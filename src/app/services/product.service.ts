import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'Casual' | 'Sport' | 'Formal';
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
      image:
        'https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67034456_09.jpg?ts=1703239418849&imwidth=360&imdensity=2',
      description: 'Minimalistic brown shirt for everyday occasions',
      category: 'Casual',
    },
    {
      id: 1,
      name: 'Purple shirt',
      price: 19.99,
      image:
        'https://assets.ajio.com/medias/sys_master/root/20231012/SHy7/65280fb2ddf779151937c284/-473Wx593H-469514976-purple-MODEL.jpg',
      description: 'Minimalistic shirt for formal occasions',
      category: 'Formal',
    },
    {
      id: 2,
      name: 'Black compression shirt',
      price: 24,
      image:
        'https://vader-prod.s3.amazonaws.com/1644955870-AO7I7572-small_1080x.jpg',
      description:
        'Compression shirt made from breathable and non-irritating materials',
      category: 'Sport',
    },
    {
      id: 3,
      name: 'Black bomber jacket',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/I/71VFs2XrDVL._AC_UY350_.jpg',
      description:
        'Lightweight versatile jacket that will keep you warm and stylish',
      category: 'Casual',
    },
    {
      id: 4,
      name: 'Jeans shorts',
      price: 20,
      image:
        'https://cheapsalemarket.com/wp-content/uploads/2021/06/Summer-Mid-Knee-Length-Men-Short-Jeans-Denim-Pants3.jpg',
      description: 'Shorts made from jeans. Ideal for hot summer days',
      category: 'Casual',
    },
    {
      id: 5,
      name: 'Black cargo pants',
      price: 30,
      image:
        'https://i.pinimg.com/736x/92/1e/93/921e93d7a9cf44af2c94cf79e263f91c.jpg',
      description: 'Baggy pants made for tech savvies',
      category: 'Casual',
    },
    {
      id: 6,
      name: 'Black sweatpants',
      price: 28.99,
      image:
        'https://i.pinimg.com/736x/bb/e5/2a/bbe52a9d74c0834e3ddb7b3d7bfbbe56.jpg',
      description: 'Made from lightweight and breathable fabric',
      category: 'Sport',
    },
    {
      id: 7,
      name: 'Nike Dunk High',
      price: 28.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      description: 'Lifestyle sneakers designed to bring retro style to modern age',
      category: 'Casual',
    },
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
