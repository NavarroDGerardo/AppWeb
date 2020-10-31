import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniSesionComponent } from './ini-sesion.component';

describe('IniSesionComponent', () => {
  let component: IniSesionComponent;
  let fixture: ComponentFixture<IniSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniSesionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
