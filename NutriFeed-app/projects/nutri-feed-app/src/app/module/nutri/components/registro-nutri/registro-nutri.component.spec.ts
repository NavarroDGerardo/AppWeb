import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNutriComponent } from './registro-nutri.component';

describe('RegistroNutriComponent', () => {
  let component: RegistroNutriComponent;
  let fixture: ComponentFixture<RegistroNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroNutriComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
