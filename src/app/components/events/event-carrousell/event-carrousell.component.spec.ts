import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCarrousellComponent } from './event-carrousell.component';

describe('EventCarrousellComponent', () => {
  let component: EventCarrousellComponent;
  let fixture: ComponentFixture<EventCarrousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCarrousellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCarrousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
