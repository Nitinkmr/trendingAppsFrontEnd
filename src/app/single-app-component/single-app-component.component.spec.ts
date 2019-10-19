import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppComponentComponent } from './single-app-component.component';

describe('SingleAppComponentComponent', () => {
  let component: SingleAppComponentComponent;
  let fixture: ComponentFixture<SingleAppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
