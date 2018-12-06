import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCadastroComponent } from './livros-cadastro.component';

describe('LivrosComponent', () => {
  let component: LivrosCadastroComponent;
  let fixture: ComponentFixture<LivrosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
