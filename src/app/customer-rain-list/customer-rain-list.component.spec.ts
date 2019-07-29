import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRainListComponent } from './customer-rain-list.component';

describe('CustomerRainListComponent', () => {
  let component: CustomerRainListComponent;
  let fixture: ComponentFixture<CustomerRainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
