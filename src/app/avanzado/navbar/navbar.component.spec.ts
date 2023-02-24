import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debe de tener un link a la página de médicos',()=>{
    // const fixture = TestBed.createComponent(AppComponent);

    const elementos=fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))

    let existe = false

    for (const iterator of elementos ) {
      if(iterator.attributes['routerLink']==='/medicos'){
        existe=true
        break;
      }

    }
    expect(existe).toBeTruthy()
  })
});
