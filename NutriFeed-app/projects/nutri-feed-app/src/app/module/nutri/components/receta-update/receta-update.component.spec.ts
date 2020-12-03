import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaUpdateComponent } from './receta-update.component';

describe('RecetaUpdateComponent', () => {
  let component: RecetaUpdateComponent;
  let fixture: ComponentFixture<RecetaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
