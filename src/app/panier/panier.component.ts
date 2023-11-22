import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Product[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.panier.subscribe(panierMiseAJour => {
      this.panier = panierMiseAJour;
    });
  }  

  supprimerProduit(uuid: string): void {
    this.panierService.supprimerDuPanier(uuid);
    this.mettreAJourPanier();
  }

  mettreAJourPanier(): void {
    this.panier = this.panierService.obtenirPanier();
  }
}
