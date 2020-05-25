import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { EpisodyPageComponent } from './episody-page/episody-page.component';




const routes: Routes = [
  
  { path: 'galeria', component: GalleryPageComponent},
  {path:'home', component: PantallaPrincipalComponent},
  {path:'episodio', component:EpisodyPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
