import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgesComponent } from './ages.component';

describe('AgesComponent', () => {
  let component: AgesComponent;
  let fixture: ComponentFixture<AgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
