import { mensaje } from "./string";

describe('Pruebas de string', ()=>{

  it('Debe de regresar un string', ()=>{

    const resp = mensaje('Marcelo')

    expect(typeof resp ).toBe('string')

  });

  it('Debe de retornar un saludo con el nombre enviado', ()=>{

    const nombre='Marcelo'
    const resp = mensaje(nombre)

    expect( resp ).toContain(` ${nombre}` )

  });

})
