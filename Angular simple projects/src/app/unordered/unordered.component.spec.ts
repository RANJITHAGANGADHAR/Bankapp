import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderedComponent } from './unordered.component';

describe('UnorderedComponent', () => {
  let component: UnorderedComponent;
  let fixture: ComponentFixture<UnorderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnorderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
