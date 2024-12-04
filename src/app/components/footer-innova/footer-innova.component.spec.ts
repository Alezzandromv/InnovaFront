import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInnovaComponent } from './footer-innova.component';

describe('FooterInnovaComponent', () => {
  let component: FooterInnovaComponent;
  let fixture: ComponentFixture<FooterInnovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterInnovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterInnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
