import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNutriComponent } from './header-nutri.component';

describe('HeaderNutriComponent', () => {
  let component: HeaderNutriComponent;
  let fixture: ComponentFixture<HeaderNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
