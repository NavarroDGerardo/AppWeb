import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasFeedComponent } from './recetas-feed.component';

describe('RecetasFeedComponent', () => {
  let component: RecetasFeedComponent;
  let fixture: ComponentFixture<RecetasFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
