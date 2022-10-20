import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProdComponent } from './checkout-prod.component';

describe('CheckoutProdComponent', () => {
  let component: CheckoutProdComponent;
  let fixture: ComponentFixture<CheckoutProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
