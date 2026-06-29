import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHistorial } from './editar-historial';

describe('EditarHistorial', () => {
  let component: EditarHistorial;
  let fixture: ComponentFixture<EditarHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarHistorial],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
