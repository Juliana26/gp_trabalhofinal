import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaleituraComponent } from './metaleitura.component';

describe('MetaleituraComponent', () => {
  let component: MetaleituraComponent;
  let fixture: ComponentFixture<MetaleituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaleituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaleituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
