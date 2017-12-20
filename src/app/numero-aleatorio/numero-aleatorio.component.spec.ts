import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroAleatorioComponent } from './numero-aleatorio.component';

describe('NumeroAleatorioComponent', () => {
  let component: NumeroAleatorioComponent;
  let fixture: ComponentFixture<NumeroAleatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroAleatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
