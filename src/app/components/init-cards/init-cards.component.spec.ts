import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitCardsComponent } from './init-cards.component';

describe('InitCardsComponent', () => {
  let component: InitCardsComponent;
  let fixture: ComponentFixture<InitCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
