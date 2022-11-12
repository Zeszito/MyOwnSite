import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLanguagesComponent } from './code-languages.component';

describe('CodeLanguagesComponent', () => {
  let component: CodeLanguagesComponent;
  let fixture: ComponentFixture<CodeLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
