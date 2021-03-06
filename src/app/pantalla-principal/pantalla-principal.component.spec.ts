import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalComponent } from './pantalla-principal.component';

describe('PantallaPrincipalComponent', () => {
  let component: PantallaPrincipalComponent;
  let fixture: ComponentFixture<PantallaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
