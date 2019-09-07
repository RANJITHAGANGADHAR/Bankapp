import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecendComponent } from './decend.component';

describe('DecendComponent', () => {
  let component: DecendComponent;
  let fixture: ComponentFixture<DecendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
