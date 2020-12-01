import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalUpdateComponent } from './registro-cal-update.component';

describe('RegistroCalUpdateComponent', () => {
  let component: RegistroCalUpdateComponent;
  let fixture: ComponentFixture<RegistroCalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCalUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
