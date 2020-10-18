import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRecetasComponent } from './registro-recetas.component';

describe('RegistroRecetasComponent', () => {
  let component: RegistroRecetasComponent;
  let fixture: ComponentFixture<RegistroRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
