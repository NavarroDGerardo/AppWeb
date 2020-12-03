import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoPacienteComponent } from './update-info-paciente.component';

describe('UpdateInfoPacienteComponent', () => {
  let component: UpdateInfoPacienteComponent;
  let fixture: ComponentFixture<UpdateInfoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
