import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private products: Product[] = [
    new Product(1, 'Produit 1', 10.99, 'Description du Produit 1'),
    new Product(1, 'Produit 2', 10.99, 'Description du Produit 2'),
    new Product(1, 'Produit 3', 10.99, 'Description du Produit 3'),
    new Product(1, 'Produit 4', 10.99, 'Description du Produit 4'),
    new Product(1, 'Produit 5', 10.99, 'Description du Produit 5'),
  ];

  constructor() {}

  getProducts(): Product[] {
    return [...this.products];
  }
}
