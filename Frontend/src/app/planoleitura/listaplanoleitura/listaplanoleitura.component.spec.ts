import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaplanoleituraComponent } from './listaplanoleitura.component';

describe('ListaplanoleituraComponent', () => {
  let component: ListaplanoleituraComponent;
  let fixture: ComponentFixture<ListaplanoleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaplanoleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaplanoleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
