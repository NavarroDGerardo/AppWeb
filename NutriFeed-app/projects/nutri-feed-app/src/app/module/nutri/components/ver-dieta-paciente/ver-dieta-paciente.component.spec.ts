import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDietaPacienteComponent } from './ver-dieta-paciente.component';

describe('VerDietaPacienteComponent', () => {
  let component: VerDietaPacienteComponent;
  let fixture: ComponentFixture<VerDietaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDietaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDietaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
