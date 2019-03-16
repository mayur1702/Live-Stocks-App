import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGridContainerComponent } from './stock-grid-container.component';

describe('StockGridContainerComponent', () => {
  let component: StockGridContainerComponent;
  let fixture: ComponentFixture<StockGridContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockGridContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
