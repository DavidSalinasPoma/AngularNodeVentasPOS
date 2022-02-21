
// Para que funciones en todas las rutas
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SedebarComponent } from './sedebar/sedebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


// Angular Material



@NgModule({
  declarations: [
    HeaderComponent,
    SedebarComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    SedebarComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
