import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NegociosComponent } from './negocios/negocios.component';
import { DesportoComponent } from './desporto/desporto.component';
import { SaudeComponent } from './saude/saude.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent, data: {animationState: 'One'}},
  {path: 'negocios', component: NegociosComponent, data: {animationState: 'Two'}},
  {path: 'desporto', component: DesportoComponent, data: {animationState: 'Three'}},
  {path: 'saude', component: SaudeComponent, data: {animationState: 'Four'}},
  {path: 'favoritos', component: FavoritosComponent, data: {animationState: 'Five'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
