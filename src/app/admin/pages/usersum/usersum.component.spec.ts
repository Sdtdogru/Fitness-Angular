import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersumComponent } from './usersum.component';

describe('UsersumComponent', () => {
  let component: UsersumComponent;
  let fixture: ComponentFixture<UsersumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
