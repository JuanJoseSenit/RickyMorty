import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { EpisodyPageComponent } from './episody-page/episody-page.component';
import { EpisodiosComponent } from './episodios/episodios.component';


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    HomeComponent,
    PantallaPrincipalComponent,
    PaginacionComponent,
    GalleryPageComponent,
    EpisodyPageComponent,
    EpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
