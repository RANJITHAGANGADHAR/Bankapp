import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomalphaComponent } from './randomalpha.component';

describe('RandomalphaComponent', () => {
  let component: RandomalphaComponent;
  let fixture: ComponentFixture<RandomalphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomalphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomalphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
