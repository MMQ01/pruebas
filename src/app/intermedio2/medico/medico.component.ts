import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  medicos:any


  constructor(public _mdSvr:MedicoService) { }

  ngOnInit(): void {
  }


  saludarMedico(nombre:string){
    return `Hola ${nombre}`
  }

  obtenerMedico(){
    this._mdSvr.getMedicos()
    .subscribe((medicos)=>this.medicos=medicos)
  }
}
