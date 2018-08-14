import { HighlighterDirective } from './highlighter.directive';
import { Component, DebugElement } from '../../../../node_modules/@angular/core';
import { ComponentFixture, TestBed, async, inject, fakeAsync } from '../../../../node_modules/@angular/core/testing';
import { HoverElementDirective } from '../hoverelement/hover-element.directive';
import { By } from '../../../../node_modules/@angular/platform-browser';

@Component({
  template: '<label appHighlighter>This is some text</label>'
    // <span appHighlighter>This is some test text for highlighter.</span>
})
class TestComponent{}

fdescribe('HighlighterDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let lableTag: DebugElement;

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
    lableTag = fixture.debugElement.query(By.css('label'));
    fixture.detectChanges();
  });

  it('should set font color to darkcyan', () => {
    lableTag.nativeElement.style.color = 'black';
    fakeAsync(inject([TestComponent], (component) => {
      component.ngOnInit();
      expect(lableTag.nativeElement.style.color).toEqual('darkcyan');
    }));
  });

  it('should set font size to 30px', () => {
    lableTag.nativeElement.style.fontSize = '15px';
    fakeAsync(inject([TestComponent], (component) => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(lableTag.nativeElement.style.fontSize).toEqual('35px');
    }));
  });
});
