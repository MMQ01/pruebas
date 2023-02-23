import { usuarioIngresado } from "./booleanos"

describe('Pruebas de booleanos',()=>{

  it('debe de retornar true',()=>{
    const reps= usuarioIngresado();

    expect(reps).toBeTruthy()
  })
})
