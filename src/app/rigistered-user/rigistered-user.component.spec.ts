import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigisteredUserComponent } from './rigistered-user.component';

describe('RigisteredUserComponent', () => {
  let component: RigisteredUserComponent;
  let fixture: ComponentFixture<RigisteredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigisteredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
