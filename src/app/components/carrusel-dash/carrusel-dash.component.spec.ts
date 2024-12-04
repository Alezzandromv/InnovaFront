import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDashComponent } from './carrusel-dash.component';

describe('CarruselDashComponent', () => {
  let component: CarruselDashComponent;
  let fixture: ComponentFixture<CarruselDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarruselDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
