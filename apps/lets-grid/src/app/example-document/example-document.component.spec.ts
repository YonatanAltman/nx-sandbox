import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDocumentComponent } from './example-document.component';

describe('ExampleDocumentComponent', () => {
  let component: ExampleDocumentComponent;
  let fixture: ComponentFixture<ExampleDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
