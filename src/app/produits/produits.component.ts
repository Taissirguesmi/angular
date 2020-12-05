import { Component, OnInit } from '@angular/core';
import{Produit} from '../model/produit';
import { ProduitService } from '../Service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'

})
export class ProduitsComponent implements OnInit {
  produit : Produit[];

  constructor(private produitService: ProduitService) { 
    this.produit = produitService.listeProduits();
  }
  supprimerProduit(prod: Produit)
   {
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
         if (conf)
      this.produitService.supprimerProduit(prod);

   }

  ngOnInit() {
  }

}
