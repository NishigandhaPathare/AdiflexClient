import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColornameComponent } from './colorname.component';

describe('ColornameComponent', () => {
  let component: ColornameComponent;
  let fixture: ComponentFixture<ColornameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColornameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColornameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
