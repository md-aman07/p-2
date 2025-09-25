import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgchildComponent } from './ngchild.component';

describe('NgchildComponent', () => {
  let component: NgchildComponent;
  let fixture: ComponentFixture<NgchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgchildComponent]
    });
    fixture = TestBed.createComponent(NgchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
