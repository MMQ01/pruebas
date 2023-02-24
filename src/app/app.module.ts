import { rutas } from './avanzado/rutas/app.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
