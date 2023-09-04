import { Injectable } from '@angular/core';
export class Product{
  constructor(public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public description:string,
    public categories:string[]) { }
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  getProducts():Product[]{
    return products.map(p=>new Product(p.id,p.title,p.price,p.rating,p.description,p.categories));
  }
  getProductByID(productID:number):Product|undefined{
    return products.find(p=>p.id===productID);
  }
}
const products = [
  {
  'id': 0,
  'title': 'First Product',
  'price': 24.99,
  'rating': 4.3,
  'description': 'This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categories': ['electronics', 'hardware']
  },
  {
  'id': 1,
  'title': 'Second Product',
  'price': 64.99,
  'rating': 3.5,
  'description': 'This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'categories': ['books']
  }
];
  
