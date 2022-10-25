import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrComponent } from './err/err.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [  
  {path:'',component:AppComponent },

  {path:'admin',children:[
    //les garde canActivate:[MygardsGuard]  pour  activer  que a les admin  pour vesiter  cette  page  
    {path:'produit', component:ProduitComponent},  
  
  ]},
  
  // si l url pas vrais  fout afficher  cette  conponent 
  
  {path:'**',component:ErrComponent}, 
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
