import { Observable, of } from 'rxjs';
// import { Subsject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  class fakeRouter{
    navigate(params:any){  }
  }
  class FakeActivatedRoute{
    // params:Observable<any>=of({});
    // private subsject= new Subsject()

    // push(valor:any){
    //   this.subsject.next(valor)
    // }
    // get params(){
    //   return this.subsject.asObservable()
    // }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        {provider:Router, useClass:fakeRouter},
        {provide: ActivatedRoute, useClass:FakeActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('Debe de redireccionar a medico cuando se guarde',()=>{
  //   const router= TestBed.get(Router);
  //   const spy=spyOn(router, 'navigate')

  //   component.guardarMedico();

  //   expect(spy).toHaveBeenCalledWith(['medico', '123'])
  // })

  // it('Debe de colocar el id=nuevo',()=>{

  //   component=fixture.componentInstance;

  //   const activatedRoute:FakeActivatedRoute=TestBed.get(ActivatedRoute)

  //   activatedRoute.push({id:'nuevo'})

  //   expect(component.id).toBe('nuevo')
  // })
});
