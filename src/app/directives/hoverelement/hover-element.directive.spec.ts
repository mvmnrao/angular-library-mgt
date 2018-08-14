import { HoverElementDirective } from './hover-element.directive';
import { Component, DebugElement } from '../../../../node_modules/@angular/core';
import { ComponentFixture, TestBed, async } from '../../../../node_modules/@angular/core/testing';
import { By } from '../../../../node_modules/@angular/platform-browser';

@Component({
  template: `
  <p class="my-p-tag" appHoverElement> This is some test text. </p>
  `
})
class TestComponent{}

describe('HoverElementDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let paraTag: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HoverElementDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    paraTag = fixture.debugElement.query(By.css('p'));
    fixture.detectChanges();
  });

  it('should handle mouse enter', () => {
    paraTag.nativeElement.style.fontSize = '15px';
    paraTag.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(paraTag.nativeElement.style.fontSize).toEqual('35px');
  });

  it('should handle mouse leave', () => {
    paraTag.nativeElement.style.fontSize = '35px';
    paraTag.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(paraTag.nativeElement.style.fontSize).toEqual('15px');
  });
});
