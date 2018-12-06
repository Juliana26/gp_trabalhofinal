import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalivroComponent } from './listalivro.component';

describe('ListalivroComponent', () => {
  let component: ListalivroComponent;
  let fixture: ComponentFixture<ListalivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
