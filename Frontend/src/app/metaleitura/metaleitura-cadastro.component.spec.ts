import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaleituraCadastroComponent } from './metaleitura-cadastro.component';

describe('MetaleituraCadastroComponent', () => {
  let component: MetaleituraCadastroComponent;
  let fixture: ComponentFixture<MetaleituraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaleituraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaleituraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
