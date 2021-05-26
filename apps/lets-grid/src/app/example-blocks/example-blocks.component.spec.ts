import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBlocksComponent } from './example-blocks.component';

describe('ExampleBlocksComponent', () => {
  let component: ExampleBlocksComponent;
  let fixture: ComponentFixture<ExampleBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
