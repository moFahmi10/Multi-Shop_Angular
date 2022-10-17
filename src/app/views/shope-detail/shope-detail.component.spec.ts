import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeDetailComponent } from './shope-detail.component';

describe('ShopeDetailComponent', () => {
  let component: ShopeDetailComponent;
  let fixture: ComponentFixture<ShopeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
