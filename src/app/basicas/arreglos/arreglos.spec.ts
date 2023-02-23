import { obtenerRobots } from "./arreglos"

describe('Pruebas de arreglos',()=>{
  it('Debe de retornar a menos 3 robots',()=>{
    const res =obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3)
  });

  it('Debe de existir megana y ultron',()=>{
    const res =obtenerRobots();
    expect(res).toContain('Megaman')
    expect(res).toContain('ultron')
  });

});
