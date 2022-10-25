import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 
  constructor(private api: ApiService ,private route: Router) { }
  tabProduit: any;
  dataSource: any;
  public tabtest:string [] =['price'];

  displayedColumns:string []= ['name','price','sale'];
  displayedColumnsPromotion:any[] = ['price_on_sale','quantity_stock','discount'];
  tabFilter: any;

  functionColumsPromotion(promo:boolean)
  {
    
    if(promo){
       
      this.displayedColumns.push(...this.displayedColumnsPromotion)
      console.log(this.displayedColumns);
      
      }
    else {
      

      console.log(this.displayedColumns);
    
    } 

  }

  ngOnInit(): void {
    
    this.api.afficher().subscribe(res=>
      {
        this.tabProduit=res;
        console.log(this.tabProduit);
        this.dataSource = this.tabProduit ;
        this.tabFilter=this.tabProduit.filter((tabProduit: { sale: boolean; }) => tabProduit.sale==true )
        console.log(this.tabFilter);
      });

  }


 
}
