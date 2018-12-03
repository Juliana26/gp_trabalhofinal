import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoleituraComponent } from './planoleitura.component';

describe('PlanoleituraComponent', () => {
  let component: PlanoleituraComponent;
  let fixture: ComponentFixture<PlanoleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
