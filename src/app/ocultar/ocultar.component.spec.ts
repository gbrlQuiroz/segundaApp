import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultarComponent } from './ocultar.component';

describe('OcultarComponent', () => {
  let component: OcultarComponent;
  let fixture: ComponentFixture<OcultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
