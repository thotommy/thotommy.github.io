import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTilesComponent } from './animated-tiles.component';

describe('AnimatedTilesComponent', () => {
  let component: AnimatedTilesComponent;
  let fixture: ComponentFixture<AnimatedTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
