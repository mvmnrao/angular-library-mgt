import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskOneComponent } from './home-task-one.component';

describe('HomeTaskOneComponent', () => {
  let component: HomeTaskOneComponent;
  let fixture: ComponentFixture<HomeTaskOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTaskOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTaskOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
