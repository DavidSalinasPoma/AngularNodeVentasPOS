import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Para las rutas generales
import { RouterModule } from '@angular/router';

// Modulo personalizado
import { PagesModule } from './pages/pages.module';

// Ruta principal
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// componentes principales de APP
import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
