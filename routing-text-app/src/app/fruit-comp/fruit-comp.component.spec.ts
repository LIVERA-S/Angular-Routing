import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCompComponent } from './fruit-comp.component';

describe('FruitCompComponent', () => {
  let component: FruitCompComponent;
  let fixture: ComponentFixture<FruitCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
