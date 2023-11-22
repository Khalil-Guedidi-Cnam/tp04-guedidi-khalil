import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { PanierService } from '../services/panier.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogueService: CatalogueService, private panierService: PanierService) {}

  ngOnInit(): void {
    this.products = this.catalogueService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log("Ajouté");
    this.panierService.ajouterAuPanier(product);
  }
}
