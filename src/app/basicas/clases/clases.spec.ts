import { Jugador } from './clases';


describe('Prueba de clases',()=>{
  let jugador= new Jugador();

  beforeEach(()=>{
    // jugador.hp=100
    jugador= new Jugador()
  })

  it('Debe retornar 80 de vida su recibe 20 de daño',()=>{

    const resp=jugador.recibeDano(20)

    expect(resp).toBe(80)
  })
  it('Debe retornar 50 de vida su recibe 50 de daño',()=>{
    // const jugador= new Jugador();

    const resp=jugador.recibeDano(50)

    expect(resp).toBe(50)
  })
  it('Debe retornar 0 de vida su recibe 150 de daño',()=>{
    // const jugador= new Jugador();

    const resp=jugador.recibeDano(150)

    expect(resp).toBe(50)
  })
})
