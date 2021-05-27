import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAreasComponent } from './example-areas.component';

describe('ExampleAreasComponent', () => {
  let component: ExampleAreasComponent;
  let fixture: ComponentFixture<ExampleAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
