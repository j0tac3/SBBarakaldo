import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardCarrousellComponent } from './event-card-carrousell.component';

describe('EventCardCarrousellComponent', () => {
  let component: EventCardCarrousellComponent;
  let fixture: ComponentFixture<EventCardCarrousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCardCarrousellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardCarrousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
