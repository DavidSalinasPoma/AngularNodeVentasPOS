import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo personalizado
import { SharedModule } from '../shared/shared.module';


// Manejo de rutas
import { RouterModule } from '@angular/router';

// Angular Material
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [ // Es para que otros modulos puedan utilizar estos componentes
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
