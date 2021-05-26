import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFlexComponent } from './example-flex.component';

describe('ExampleFlexComponent', () => {
  let component: ExampleFlexComponent;
  let fixture: ComponentFixture<ExampleFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
