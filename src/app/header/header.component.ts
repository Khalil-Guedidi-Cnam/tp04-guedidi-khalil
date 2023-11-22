import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombreArticles: number = 0;
  private panierSubscription?: Subscription;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierSubscription = this.panierService.panier.subscribe(
      (panier) => {
        this.nombreArticles = panier.length;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.panierSubscription) {
      this.panierSubscription.unsubscribe();
    }
  }
}
