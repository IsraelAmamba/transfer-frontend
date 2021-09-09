import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalToLocalComponent } from './local-to-local.component';

describe('LocalToLocalComponent', () => {
  let component: LocalToLocalComponent;
  let fixture: ComponentFixture<LocalToLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalToLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalToLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
