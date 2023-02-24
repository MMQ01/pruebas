import { MedicoComponent } from './../../intermedio2/medico/medico.component';
import { rutas } from './app.routes';
describe('rutas principales',()=>{
  it('debe de existir la ruta /medico/:id',()=>{
    expect(rutas).toContain(
      {
      path:'medico/:id',
      component:MedicoComponent
    }
    )
  })
})
