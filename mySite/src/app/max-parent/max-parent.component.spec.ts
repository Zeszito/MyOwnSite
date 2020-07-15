import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxParentComponent } from './max-parent.component';

describe('MaxParentComponent', () => {
  let component: MaxParentComponent;
  let fixture: ComponentFixture<MaxParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
