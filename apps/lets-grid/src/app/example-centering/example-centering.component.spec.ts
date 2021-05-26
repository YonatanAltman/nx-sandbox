import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCenteringComponent } from './example-centering.component';

describe('ExampleCenteringComponent', () => {
  let component: ExampleCenteringComponent;
  let fixture: ComponentFixture<ExampleCenteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCenteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCenteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
