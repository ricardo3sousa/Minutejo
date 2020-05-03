import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatComponent } from './header-cat.component';

describe('HeaderCatComponent', () => {
  let component: HeaderCatComponent;
  let fixture: ComponentFixture<HeaderCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
