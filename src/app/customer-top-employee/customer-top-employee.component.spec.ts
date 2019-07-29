import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTopEmployeeComponent } from './customer-top-employee.component';

describe('CustomerTopEmployeeComponent', () => {
  let component: CustomerTopEmployeeComponent;
  let fixture: ComponentFixture<CustomerTopEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTopEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTopEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
