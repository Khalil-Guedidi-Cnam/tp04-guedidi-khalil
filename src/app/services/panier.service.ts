import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panierSource = new BehaviorSubject<Product[]>([]);
  panier = this.panierSource.asObservable();

  constructor() {}

  ajouterAuPanier(product: Product): void {
    const produitAvecUUID = { ...product, uuid: uuidv4() };
    const panierActuel = this.panierSource.value;
    this.panierSource.next([...panierActuel, produitAvecUUID]);
  }

  obtenirPanier(): Product[] {
    return this.panierSource.value;
  }

  supprimerDuPanier(uuid: string): void {
    const panierMiseAJour = this.panierSource.value.filter(product => product.uuid !== uuid);
    this.panierSource.next(panierMiseAJour);
  }

}
