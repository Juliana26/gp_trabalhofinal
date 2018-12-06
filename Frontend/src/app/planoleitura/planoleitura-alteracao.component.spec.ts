import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoleituraalteracaoComponent } from './planoleitura-alteracao.component';

describe('PlanoleituraCadastroComponent', () => {
  let component: PlanoleituraalteracaoComponent;
  let fixture: ComponentFixture<PlanoleituraalteracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoleituraalteracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoleituraalteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
