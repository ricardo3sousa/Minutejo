import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesportoComponent } from './desporto.component';

describe('DesportoComponent', () => {
  let component: DesportoComponent;
  let fixture: ComponentFixture<DesportoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesportoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
