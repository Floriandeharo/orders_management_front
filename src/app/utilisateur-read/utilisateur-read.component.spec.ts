import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurReadComponent } from './utilisateur-read.component';

describe('UtilisateurReadComponent', () => {
  let component: UtilisateurReadComponent;
  let fixture: ComponentFixture<UtilisateurReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
