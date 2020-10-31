import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilPacienteComponent } from './ver-perfil-paciente.component';

describe('VerPerfilPacienteComponent', () => {
  let component: VerPerfilPacienteComponent;
  let fixture: ComponentFixture<VerPerfilPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerPerfilPacienteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPerfilPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
