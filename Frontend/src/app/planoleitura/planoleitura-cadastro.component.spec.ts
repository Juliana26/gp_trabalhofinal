import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoleituraCadastroComponent } from './planoleitura-cadastro.component';

describe('PlanoleituraCadastroComponent', () => {
  let component: PlanoleituraCadastroComponent;
  let fixture: ComponentFixture<PlanoleituraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoleituraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoleituraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
