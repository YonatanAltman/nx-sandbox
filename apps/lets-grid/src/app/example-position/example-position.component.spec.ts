import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePositionComponent } from './example-position.component';

describe('ExamplePositionComponent', () => {
  let component: ExamplePositionComponent;
  let fixture: ComponentFixture<ExamplePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
