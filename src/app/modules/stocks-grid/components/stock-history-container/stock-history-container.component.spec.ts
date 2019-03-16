import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryContainerComponent } from './stock-history-container.component';

describe('StockHistoryContainerComponent', () => {
  let component: StockHistoryContainerComponent;
  let fixture: ComponentFixture<StockHistoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHistoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
