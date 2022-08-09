import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { LenguajesFrameworksComponent } from './componentes/lenguajes-frameworks/lenguajes-frameworks.component';
import { HobbiesComponent } from './componentes/hobbies/hobbies.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    EncabezadoComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    ExperienciasComponent,
    LenguajesFrameworksComponent,
    HobbiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
