import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosCardComponent } from './archivos-card.component';

describe('ArchivosCardComponent', () => {
  let component: ArchivosCardComponent;
  let fixture: ComponentFixture<ArchivosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivosCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
