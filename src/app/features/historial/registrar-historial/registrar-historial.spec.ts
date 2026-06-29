import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHistorial } from './registrar-historial';

describe('RegistrarHistorial', () => {
  let component: RegistrarHistorial;
  let fixture: ComponentFixture<RegistrarHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarHistorial],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
