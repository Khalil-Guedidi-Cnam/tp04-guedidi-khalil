import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanierService } from './services/panier.service';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    PanierComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
