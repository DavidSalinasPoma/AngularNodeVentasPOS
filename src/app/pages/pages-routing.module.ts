import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



// Componente principal de PAGES
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    // Cuando el path sea vacio va redireciones aun sub moduloComonenete
    path: 'dashboard', // ruta padre
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } }, // Path inicial
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
