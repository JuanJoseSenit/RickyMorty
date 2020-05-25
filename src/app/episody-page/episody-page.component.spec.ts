import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodyPageComponent } from './episody-page.component';

describe('EpisodyPageComponent', () => {
  let component: EpisodyPageComponent;
  let fixture: ComponentFixture<EpisodyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
