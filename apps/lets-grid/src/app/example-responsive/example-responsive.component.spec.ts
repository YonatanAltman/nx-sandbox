import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleResponsiveComponent } from './example-responsive.component';

describe('ExampleResponsiveComponent', () => {
  let component: ExampleResponsiveComponent;
  let fixture: ComponentFixture<ExampleResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
