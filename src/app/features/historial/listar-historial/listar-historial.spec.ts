import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHistorial } from './listar-historial';

describe('ListarHistorial', () => {
  let component: ListarHistorial;
  let fixture: ComponentFixture<ListarHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarHistorial],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
