import { Jugador2 } from "./jugador2"


describe('Jugador 2 emit',()=>{


  let jugador : Jugador2;

  beforeEach(()=>jugador = new Jugador2());

  it('debe de emitir un eveneto cuando recibe daño',()=>{

    let nuevoHP =0
    jugador.hpCambia.subscribe(hp=>{
      nuevoHP = hp
    })
    jugador.recibeDano(1000)

    expect(nuevoHP).toBe(0)
  })

  it('debe de emitir un eveneto cuando recibe daño y sobrevivir si es menos de 100',()=>{

    let nuevoHP =0
    jugador.hpCambia.subscribe(hp=>{
      nuevoHP = hp
    })
    jugador.recibeDano(50)

    expect(nuevoHP).toBe(50)
  })


})
