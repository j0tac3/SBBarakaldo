import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEventComponent } from './model-event.component';

describe('ModelEventComponent', () => {
  let component: ModelEventComponent;
  let fixture: ComponentFixture<ModelEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
