import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Configuracion de ruta para PAGES
import { PagesRoutingModule } from './pages/pages-routing.module';


// Configurar las rutas de la APP
const routes: Routes = [

  // Si es un path vacio va a redirecionar a -> dashboard y esto a un -> path: '', component: DashboardComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Cualquiera otra ruta que no este definida en este routing va a mostrar NoPagesFound
  { path: '**', component: NopagesfoundComponent }
  /**Fin rutas hijas principales */

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [
    RouterModule // Se exporta para que otro modulo pueda disponer de este routing
  ]
})
export class AppRoutingModule { }
