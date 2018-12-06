import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalivrometaleituraComponent } from './listalivrometaleitura.component';

describe('ListalivrometaleituraComponent', () => {
  let component: ListalivrometaleituraComponent;
  let fixture: ComponentFixture<ListalivrometaleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalivrometaleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalivrometaleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
