import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacbookComponent } from './facbook.component';

describe('FacbookComponent', () => {
  let component: FacbookComponent;
  let fixture: ComponentFixture<FacbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
