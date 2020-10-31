import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPacienteComponent } from './header-paciente.component';

describe('HeaderPacienteComponent', () => {
  let component: HeaderPacienteComponent;
  let fixture: ComponentFixture<HeaderPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPacienteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
