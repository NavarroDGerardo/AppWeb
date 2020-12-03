import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioNutriComponent } from './horario-nutri.component';

describe('HorarioNutriComponent', () => {
  let component: HorarioNutriComponent;
  let fixture: ComponentFixture<HorarioNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
