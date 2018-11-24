import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeusuarioComponent } from './homeusuario.component';

describe('HomeusuarioComponent', () => {
  let component: HomeusuarioComponent;
  let fixture: ComponentFixture<HomeusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
