import { FormularioRegister } from "./formulario"
import { FormBuilder } from "@angular/forms";
describe('Formualios', ()=>{

  let component: FormularioRegister


  beforeEach(()=>{
    component=new FormularioRegister( new FormBuilder());
  });

  it('Debe de crear un formulario con email y password',()=>{

    expect(component.form.contains('email')).toBeTruthy()
    expect(component.form.contains('password')).toBeTruthy()

  })

  it('El email debe de ser obligatorio',()=>{
    const control= component.form.get('email')
    control?.setValue('')

    expect(control?.valid).toBeFalse();
  })

  it('El email debe de ser valido',()=>{
    const control= component.form.get('email')
    control?.setValue('Marcelo@gmail.com')

    expect(control?.valid).toBeTruthy();
  })


})
