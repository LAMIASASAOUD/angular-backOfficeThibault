import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitComponent } from './produit/produit.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrComponent } from './err/err.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatMenuModule,
    MatSidenavModule,MatButtonModule,MatButtonToggleModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
