import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListametaleituraComponent } from './listametaleitura.component';

describe('ListametaleituraComponent', () => {
  let component: ListametaleituraComponent;
  let fixture: ComponentFixture<ListametaleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListametaleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListametaleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
