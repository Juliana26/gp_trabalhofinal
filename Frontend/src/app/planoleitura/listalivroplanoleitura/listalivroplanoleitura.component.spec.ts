import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalivroplanoleituraComponent } from './listalivroplanoleitura.component';

describe('ListalivroplanoleituraComponent', () => {
  let component: ListalivroplanoleituraComponent;
  let fixture: ComponentFixture<ListalivroplanoleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalivroplanoleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalivroplanoleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
