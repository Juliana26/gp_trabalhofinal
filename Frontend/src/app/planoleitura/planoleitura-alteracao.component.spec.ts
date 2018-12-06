import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoleituraAlteracaoComponent } from './planoleitura-alteracao.component';

describe('PlanoleituraCadastroComponent', () => {
  let component: PlanoleituraAlteracaoComponent;
  let fixture: ComponentFixture<PlanoleituraAlteracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoleituraAlteracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoleituraAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
