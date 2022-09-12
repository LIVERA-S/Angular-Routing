import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCompComponent } from './animal-comp.component';

describe('AnimalCompComponent', () => {
  let component: AnimalCompComponent;
  let fixture: ComponentFixture<AnimalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
