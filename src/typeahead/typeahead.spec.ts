import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';

import {ChangeDetectionStrategy, Component, DebugElement, ViewChild} from '@angular/core';
import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {createGenericTestComponent, isBrowser} from '../test/common';
import {expectResults, getWindowLinks} from '../test/typeahead/common';

import {NgbTypeahead} from './typeahead';
import {NgbTypeaheadConfig} from './typeahead-config';
import {NgbTypeaheadModule} from './typeahead.module';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

const createOnPushTestComponent = (html: string) =>
    createGenericTestComponent(html, TestOnPushComponent) as ComponentFixture<TestOnPushComponent>;

const createAsyncTestComponent = (html: string) =>
    createGenericTestComponent(html, TestAsyncComponent) as ComponentFixture<TestAsyncComponent>;

enum Key {
  Tab = 9,
  Enter = 13,
  Escape = 27,
  ArrowUp = 38,
  ArrowDown = 40
}

function createKeyDownEvent(key: number) {
  const event = {which: key, preventDefault: () => {}, stopPropagation: () => {}};
  spyOn(event, 'preventDefault');
  spyOn(event, 'stopPropagation');
  return event;
}

function getWindow(element): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('ngb-typeahead-window.dropdown-menu');
}

function getDebugInput(element: DebugElement): DebugElement {
  return element.query(By.directive(NgbTypeahead));
}

function getNativeInput(element: HTMLElement): HTMLInputElement {
  return <HTMLInputElement>element.querySelector('input');
}

function changeInput(element: any, value: string) {
  const input = getNativeInput(element);
  input.value = value;
  const evt = document.createEvent('MouseEvent');
  evt.initEvent('input', true, true);
  input.dispatchEvent(evt);
}

function blurInput(element: any) {
  const input = getNativeInput(element);
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('blur', false, false);
  input.dispatchEvent(evt);
}

function expectInputValue(element: HTMLElement, value: string) {
  expect(getNativeInput(element).value).toBe(value);
}

function expectWindowResults(element, expectedResults: string[]) {
  const window = getWindow(element);
  expect(window).not.toBeNull();
  expectResults(window, expectedResults);
}

describe('ngb-typeahead', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TestOnPushComponent, TestAsyncComponent],
      imports: [NgbTypeaheadModule.forRoot(), FormsModule, ReactiveFormsModule]
    });
  });

  describe('valueaccessor', () => {
    it('should format values when no formatter provided', async(() => {
         const fixture = createTestComponent('<input [(ngModel)]="model" [ngbTypeahead]="findNothing" />');

         const el = fixture.nativeElement;
         const comp = fixture.componentInstance;
         expectInputValue(el, '');

         comp.model = 'text';
         fixture.detectChanges();
         fixture.whenStable()
             .then(() => {
               expectInputValue(el, 'text');

               comp.model = null;
               fixture.detectChanges();
               return fixture.whenStable();
             })
             .then(() => {
               expectInputValue(el, '');

               comp.model = {};
               fixture.detectChanges();
               return fixture.whenStable();
             })
             .then(() => {
               expectInputValue(el, '[object Object]');
             });
       }));

    it('should format values with custom formatter provided', async(() => {
         const html =
             '<input [(ngModel)]="model" [ngbTypeahead]="findNothing" [inputFormatter]="uppercaseObjFormatter"/>';
         const fixture = createTestComponent(html);
         const el = fixture.nativeElement;
         const comp = fixture.componentInstance;
         expectInputValue(el, '');

         comp.model = null;
         fixture.detectChanges();
         fixture.whenStable()
             .then(() => {
               expectInputValue(el, '');

               comp.model = {value: 'text'};
               fixture.detectChanges();
               return fixture.whenStable();
             })
             .then(() => {
               expectInputValue(el, 'TEXT');
             });
       }));
  });

  describe('window', () => {
    it('should be closed by default', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;
      expect(getWindow(compiled)).toBeNull();
    });

    it('should not be opened when the model changes', async(() => {
         const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         fixture.componentInstance.model = 'one';
         fixture.detectChanges();
         fixture.whenStable().then(() => {
           expect(getWindow(compiled)).toBeNull();
         });
       }));

    it('should be opened when there are results', async(() => {
         const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         fixture.whenStable().then(() => {
           changeInput(compiled, 'one');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+one', 'one more']);
           expect(fixture.componentInstance.model).toBe('one');
         });
       }));

    it('should be closed when there no results', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="findNothing"/>`);
      const compiled = fixture.nativeElement;

      expect(getWindow(compiled)).toBeNull();
    });

    it('should be closed on document click', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'one');
      fixture.detectChanges();
      expect(getWindow(compiled)).not.toBeNull();

      fixture.nativeElement.click();
      expect(getWindow(compiled)).toBeNull();
    });

    it('should not be closed on input click', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'one');
      fixture.detectChanges();
      expect(getWindow(compiled)).not.toBeNull();

      getNativeInput(compiled).click();
      expect(getWindow(compiled)).not.toBeNull();
    });

    describe('open on focus and click', () => {
      const createFixture = () => createTestComponent(`<input
        type="text"
        [ngbTypeahead]="find"
        (focus)="focus$.next($event.target.value)"
        (click)="click$.next($event.target.value)"
      />`);

      // on IE the focus & blur can be asynchronous, so we need to wait a bit before continuing
      const delay = () => new Promise(resolve => setTimeout(resolve, 25));
      const focus = async (input) => {
        input.focus();
        await delay();
      };
      const blur = async (input) => {
        input.blur();
        await delay();
      };

      it('should open on focus or click', async(async () => {
           const fixture = createFixture();
           const compiled = fixture.nativeElement;
           const input = getNativeInput(compiled);

           let searchCount = 0;
           fixture.componentInstance.findOutput$.subscribe(() => searchCount++);
           const checkSearchCount = (expected, context) => {
             expect(searchCount).toBe(expected, `Search count is not correct: ${context}`);
             searchCount = 0;
           };

           const checkWindowIsClosed = () => {
             expect(getWindow(compiled)).toBeNull();
             expect(fixture.componentInstance.model).toBe(undefined);
             expect(input.value).toBe('');
           };

           const checkWindowIsOpen = () => {
             expect(getWindow(compiled)).not.toBeNull();
           };

           // focusing the input triggers a search and opens the dropdown
           await focus(input);
           checkSearchCount(1, 'on first focus');
           checkWindowIsOpen();

           // clicking again in the input while the dropdown is open doesn't trigger a new search and keeps the
           // dropdown open
           input.click();
           checkSearchCount(0, 'on input click when dropdown already open');
           checkWindowIsOpen();

           // closing the dropdown but keeping focus
           const event = createKeyDownEvent(Key.Escape);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           checkWindowIsClosed();

           // clicking again in the input while already focused but dropdown closed triggers a search and opens the
           // dropdown
           input.click();
           checkSearchCount(1, 'on input click when input is already focused but dropdown is closed');
           checkWindowIsOpen();

           // closing the dropdown and losing focus
           fixture.nativeElement.click();
           await blur(input);
           checkWindowIsClosed();

           // Clicking directly, putting focus at the same time, triggers only one search and opens the dropdown
           input.click();
           checkSearchCount(1, 'on input focus specifically with a click');
           checkWindowIsOpen();
         }));

      it('should preserve value previously selected with mouse when reopening with focus then closing without selection',
         async(async () => {
           const fixture = createFixture();
           const compiled = fixture.nativeElement;
           const input = getNativeInput(compiled);

           await fixture.whenStable();
           // open with partial input
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expect(getWindow(compiled)).not.toBeNull('Window should be opened after typing in the input');

           // select with click
           getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
           fixture.detectChanges();
           expectInputValue(compiled, 'one');
           expect(getWindow(compiled)).toBeNull('Window should be closed after selecting option with the mouse');

           // open again but with focus
           await blur(input);
           await focus(input);
           expect(getWindow(compiled)).not.toBeNull('Window should be opened after focusing back the input');

           // close without selecting a new value
           const event = createKeyDownEvent(Key.Escape);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(getWindow(compiled)).toBeNull('Window should be closed after pressing escape');
           expectInputValue(compiled, 'one');
         }));
    });

    it('should be closed when ESC is pressed', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'one');
      fixture.detectChanges();
      expect(getWindow(compiled)).not.toBeNull();

      const event = createKeyDownEvent(Key.Escape);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expect(getWindow(compiled)).toBeNull();
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should select the result on click, close window and fill the input', async(() => {
         const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         fixture.whenStable().then(() => {
           // clicking selected
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+one', 'one more']);

           getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
           fixture.detectChanges();
           expect(getWindow(compiled)).toBeNull();
           expectInputValue(compiled, 'one');
           expect(fixture.componentInstance.model).toBe('one');

           // clicking not selected
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+one', 'one more']);
           expectInputValue(compiled, 'o');

           getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
           fixture.detectChanges();
           expect(getWindow(compiled)).toBeNull();
           expectInputValue(compiled, 'one');
         });
       }));

    it('should select the result on ENTER, close window and fill the input', async(() => {
         const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         fixture.whenStable().then(() => {
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+one', 'one more']);

           const event = createKeyDownEvent(Key.Enter);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(getWindow(compiled)).toBeNull();
           expectInputValue(compiled, 'one');
           expect(fixture.componentInstance.model).toBe('one');
           expect(event.preventDefault).toHaveBeenCalled();
           expect(event.stopPropagation).toHaveBeenCalled();
         });
       }));

    it('should select the result on TAB, close window and fill the input', () => {
      const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expect(getWindow(compiled)).not.toBeNull();

      const event = createKeyDownEvent(Key.Tab);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expect(getWindow(compiled)).toBeNull();
      expectInputValue(compiled, 'one');
      expect(fixture.componentInstance.model).toBe('one');
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should make previous/next results active with up/down arrow keys', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expectWindowResults(compiled, ['+one', 'one more']);

      // down
      let event = createKeyDownEvent(Key.ArrowDown);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', '+one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      event = createKeyDownEvent(Key.ArrowDown);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['+one', 'one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      // up
      event = createKeyDownEvent(Key.ArrowUp);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', '+one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      event = createKeyDownEvent(Key.ArrowUp);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['+one', 'one more']);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should use provided result formatter function', () => {
      const fixture =
          createTestComponent(`<input type="text" [ngbTypeahead]="find" [resultFormatter]="uppercaseFormatter"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expectWindowResults(compiled, ['+ONE', 'ONE MORE']);
    });

    it('should not mark first result as active when focusFirst is false', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find" [focusFirst]="false"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', 'one more']);
    });

    it('should properly make previous/next results active with down arrow keys when focusFirst is false', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find" [focusFirst]="false"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', 'one more']);

      // down
      let event = createKeyDownEvent(Key.ArrowDown);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['+one', 'one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      event = createKeyDownEvent(Key.ArrowDown);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', '+one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      event = createKeyDownEvent(Key.ArrowDown);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', 'one more']);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should properly make previous/next results active with up arrow keys when focusFirst is false', () => {
      const fixture = createTestComponent(`<input type="text" [ngbTypeahead]="find" [focusFirst]="false"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', 'one more']);

      // up
      let event = createKeyDownEvent(Key.ArrowUp);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['one', '+one more']);
      expect(event.preventDefault).toHaveBeenCalled();

      event = createKeyDownEvent(Key.ArrowUp);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expectWindowResults(compiled, ['+one', 'one more']);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should not select the result on TAB, close window and not write to the input when focusFirst is false', () => {
      const fixture =
          createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find" [focusFirst]="false"/>`);
      const compiled = fixture.nativeElement;

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expect(getWindow(compiled)).not.toBeNull();

      const event = createKeyDownEvent(Key.Tab);
      getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
      fixture.detectChanges();
      expect(getWindow(compiled)).toBeNull();
      expectInputValue(compiled, 'o');
      expect(fixture.componentInstance.model).toBe('o');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should properly display results when an owning components using OnPush strategy', fakeAsync(() => {
         const fixture = createOnPushTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         changeInput(compiled, 'o');
         fixture.detectChanges();
         tick(250);
         expectWindowResults(compiled, ['+one', 'one more']);
       }));
  });

  describe('with async typeahead function', () => {
    it('should not display results when input is "blured"', fakeAsync(() => {
         const fixture = createAsyncTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         changeInput(compiled, 'one');
         fixture.detectChanges();

         tick(50);

         blurInput(compiled);
         fixture.detectChanges();

         tick(250);
         expect(getWindow(compiled)).toBeNull();

         // Make sure that it is resubscribed again
         changeInput(compiled, 'two');
         fixture.detectChanges();
         tick(250);
         expect(getWindow(compiled)).not.toBeNull();
       }));

    it('should not display results when "Escape" is pressed', fakeAsync(() => {
         const fixture = createAsyncTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         // Change input first time
         changeInput(compiled, 'one');
         fixture.detectChanges();

         // Results for first input are loaded
         tick(250);
         expect(getWindow(compiled)).not.toBeNull();

         // Change input second time
         changeInput(compiled, 'two');
         fixture.detectChanges();
         tick(50);

         // Press Escape while second is still in proggress
         const event = createKeyDownEvent(Key.Escape);
         getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
         fixture.detectChanges();

         // Results for second input are loaded (window shouldn't be opened in this case)
         tick(250);
         expect(getWindow(compiled)).toBeNull();

         // Make sure that it is resubscribed again
         changeInput(compiled, 'three');
         fixture.detectChanges();
         tick(250);
         expect(getWindow(compiled)).not.toBeNull();
       }));

    it('should not display results when value selected while new results are been loading', fakeAsync(() => {
         const fixture = createAsyncTestComponent(`<input type="text" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;

         // Change input first time
         changeInput(compiled, 'one');
         fixture.detectChanges();

         // Results for first input are loaded
         tick(250);
         expect(getWindow(compiled)).not.toBeNull();

         // Change input second time
         changeInput(compiled, 'two');
         fixture.detectChanges();
         tick(50);

         // Select a value from first results list while second is still in proggress
         getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
         fixture.detectChanges();
         expect(getWindow(compiled)).toBeNull();

         // Results for second input are loaded (window shouldn't be opened in this case)
         tick(250);
         expect(getWindow(compiled)).toBeNull();

         // Make sure that it is resubscribed again
         changeInput(compiled, 'three');
         fixture.detectChanges();
         tick(250);
         expect(getWindow(compiled)).not.toBeNull();
       }));
  });

  describe('objects', () => {
    it('should work with custom objects as values', async(() => {
         const fixture = createTestComponent(`
             <input type="text" [(ngModel)]="model" [ngbTypeahead]="findObjects"
                    [inputFormatter]="formatter" [resultFormatter]="uppercaseObjFormatter"/>`);
         const compiled = fixture.nativeElement;

         fixture.whenStable().then(() => {
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+ONE', 'ONE MORE']);

           const event = createKeyDownEvent(Key.Enter);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(getWindow(compiled)).toBeNull();
           expect(getNativeInput(compiled).value).toBe('1 one');
           expect(fixture.componentInstance.model).toEqual({id: 1, value: 'one'});
         });
       }));

    it('should allow to assign ngModel custom objects', async(() => {
         const fixture = createTestComponent(`
             <input type="text" [(ngModel)]="model" [ngbTypeahead]="findObjects"
                    [inputFormatter]="formatter" [resultFormatter]="uppercaseObjFormatter"/>`);
         const compiled = fixture.nativeElement;

         fixture.componentInstance.model = {id: 1, value: 'one'};
         fixture.detectChanges();
         fixture.whenStable().then(() => {
           expect(getWindow(compiled)).toBeNull();
           expect(getNativeInput(compiled).value).toBe('1 one');
         });
       }));
  });

  describe('forms', () => {
    it('should work with template-driven form validation', async(() => {
         const html = `
            <form>
              <input type="text" [(ngModel)]="model" name="control" required [ngbTypeahead]="findObjects" />
            </form>`;
         const fixture = createTestComponent(html);
         fixture.whenStable().then(() => {
           fixture.detectChanges();
           const compiled = fixture.nativeElement;
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');

           changeInput(compiled, 'o');
           fixture.detectChanges();
           expect(getNativeInput(compiled)).toHaveCssClass('ng-valid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-invalid');
         });
       }));

    it('should work with model-driven form validation', () => {
      const html = `
           <form [formGroup]="form">
             <input type="text" formControlName="control" required [ngbTypeahead]="findObjects" />
           </form>`;
      const fixture = createTestComponent(html);
      const compiled = fixture.nativeElement;

      expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
      expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');

      changeInput(compiled, 'o');
      fixture.detectChanges();
      expect(getNativeInput(compiled)).toHaveCssClass('ng-valid');
      expect(getNativeInput(compiled)).not.toHaveCssClass('ng-invalid');
    });

    it('should support disabled state', async(() => {
         const html = `
            <form>
              <input type="text" [(ngModel)]="model" name="control" [disabled]="true" [ngbTypeahead]="findObjects" />
            </form>`;
         const fixture = createTestComponent(html);
         fixture.whenStable().then(() => {
           fixture.detectChanges();
           const compiled = fixture.nativeElement;
           expect(getNativeInput(compiled).disabled).toBeTruthy();
         });
       }));

    it('should only propagate model changes on select when the editable option is on', async(() => {
         const html = `
            <form>
              <input type="text" [(ngModel)]="model" name="control" required [ngbTypeahead]="find" [editable]="false"/>
            </form>`;
         const fixture = createTestComponent(html);
         fixture.whenStable().then(() => {
           fixture.detectChanges();
           const compiled = fixture.nativeElement;
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');

           changeInput(compiled, 'o');
           fixture.detectChanges();
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');
           expect(fixture.componentInstance.model).toBeUndefined();

           const event = createKeyDownEvent(Key.Enter);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).toHaveCssClass('ng-valid');
           expect(fixture.componentInstance.model).toBe('one');
         });
       }));

    it('should clear model on user input when the editable option is on', async(() => {
         const html = `
            <form>
              <input type="text" [(ngModel)]="model" name="control" required [ngbTypeahead]="find" [editable]="false"/>
            </form>`;
         const fixture = createTestComponent(html);
         fixture.whenStable().then(() => {
           fixture.detectChanges();
           const compiled = fixture.nativeElement;
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');

           changeInput(compiled, 'o');
           fixture.detectChanges();
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');
           expect(fixture.componentInstance.model).toBeUndefined();

           const event = createKeyDownEvent(Key.Enter);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).toHaveCssClass('ng-valid');
           expect(fixture.componentInstance.model).toBe('one');

           changeInput(compiled, 'tw');
           fixture.detectChanges();
           expect(getNativeInput(compiled)).toHaveCssClass('ng-invalid');
           expect(getNativeInput(compiled)).not.toHaveCssClass('ng-valid');
           expect(fixture.componentInstance.model).toBeUndefined();
         });
       }));
  });

  describe('select event', () => {
    it('should raise select event when a result is selected', () => {
      const fixture = createTestComponent('<input [ngbTypeahead]="find" (selectItem)="onSelect($event.item)"/>');
      const input = getNativeInput(fixture.nativeElement);

      // clicking selected
      changeInput(fixture.nativeElement, 'o');
      fixture.detectChanges();
      getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
      fixture.detectChanges();

      expect(fixture.componentInstance.selectEventValue).toBe('one');
    });

    it('should not propagate model when preventDefault() is called on selectEvent', async(() => {
         const fixture = createTestComponent(
             '<input [(ngModel)]="model" [ngbTypeahead]="find" (selectItem)="$event.preventDefault()"/>');
         const input = getNativeInput(fixture.nativeElement);

         // clicking selected
         changeInput(fixture.nativeElement, 'o');
         fixture.detectChanges();
         getWindowLinks(fixture.debugElement)[0].triggerEventHandler('click', {});
         fixture.detectChanges();
         fixture.whenStable().then(() => {
           expect(fixture.componentInstance.model).toBe('o');
         });
       }));
  });

  describe('container', () => {
    it('should be appended to the element matching the selector passed to "container"', () => {
      const selector = 'body';
      const fixture = createTestComponent(`<input [ngbTypeahead]="find" container="${selector}"/>`);

      changeInput(fixture.nativeElement, 'one');
      fixture.detectChanges();

      expect(getWindow(fixture.nativeElement)).toBeNull();
      expect(getWindow(document.querySelector(selector))).not.toBeNull();
    });

    it('should properly destroy typeahead window when the "container" option is used', () => {
      const selector = 'body';
      const fixture = createTestComponent(`<input *ngIf="show" [ngbTypeahead]="find" container="${selector}"/>`);

      changeInput(fixture.nativeElement, 'one');
      fixture.detectChanges();

      expect(getWindow(fixture.nativeElement)).toBeNull();
      expect(getWindow(document.querySelector(selector))).not.toBeNull();

      fixture.componentInstance.show = false;
      fixture.detectChanges();

      expect(getWindow(fixture.nativeElement)).toBeNull();
      expect(getWindow(document.querySelector(selector))).toBeNull();
    });
  });

  describe('auto attributes', () => {
    it('should have autocomplete, autocapitalize and autocorrect attributes set to off', () => {
      const fixture = createTestComponent('<input type="text" [ngbTypeahead]="findObjects" />');
      const input = getNativeInput(fixture.nativeElement);

      expect(input.getAttribute('autocomplete')).toBe('off');
      expect(input.getAttribute('autocapitalize')).toBe('off');
      expect(input.getAttribute('autocorrect')).toBe('off');
    });
  });

  describe('accessibility', () => {
    it('should have correct role, aria-autocomplete, aria-expanded set by default', () => {
      const fixture = createTestComponent('<input type="text" [ngbTypeahead]="findObjects" />');
      const input = getNativeInput(fixture.nativeElement);

      fixture.detectChanges();

      expect(input.getAttribute('role')).toBe('combobox');
      expect(input.getAttribute('aria-multiline')).toBe('false');
      expect(input.getAttribute('aria-autocomplete')).toBe('list');
      expect(input.getAttribute('aria-expanded')).toBe('false');
      expect(input.getAttribute('aria-owns')).toBeNull();
      expect(input.getAttribute('aria-autocomplete')).toBe('list');
      expect(input.getAttribute('aria-activedescendant')).toBeNull();
    });

    it('should correctly set aria-autocomplete depending on showHint', () => {
      const fixture = createTestComponent('<input type="text" [ngbTypeahead]="findObjects"  [showHint]="true" />');
      const input = getNativeInput(fixture.nativeElement);

      fixture.detectChanges();

      expect(input.getAttribute('aria-autocomplete')).toBe('both');
    });

    it('should have the correct ARIA attributes when interacting with input', async(() => {
         const fixture = createTestComponent(`<input type="text" [(ngModel)]="model" [ngbTypeahead]="find"/>`);
         const compiled = fixture.nativeElement;
         const input = getNativeInput(compiled);
         fixture.detectChanges();

         fixture.whenStable().then(() => {
           changeInput(compiled, 'o');
           fixture.detectChanges();
           expectWindowResults(compiled, ['+one', 'one more']);
           expect(input.getAttribute('aria-expanded')).toBe('true');
           expect(input.getAttribute('aria-owns')).toMatch(/ngb-typeahead-[0-9]+/);
           expect(input.getAttribute('aria-activedescendant')).toMatch(/ngb-typeahead-[0-9]+-0/);

           let event = createKeyDownEvent(Key.ArrowDown);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(input.getAttribute('aria-activedescendant')).toMatch(/ngb-typeahead-[0-9]+-1/);

           event = createKeyDownEvent(Key.Enter);
           getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
           fixture.detectChanges();
           expect(input.getAttribute('aria-expanded')).toBe('false');
           expect(input.getAttribute('aria-owns')).toBeNull();
           expect(input.getAttribute('aria-activedescendant')).toBeNull();
         });
       }));
  });

  if (!isBrowser(['ie', 'edge'])) {
    describe('hint', () => {
      it('should show hint when an item starts with user input', async(() => {
           const fixture = createTestComponent(
               `<input type="text" [(ngModel)]="model" [ngbTypeahead]="findAnywhere" [showHint]="true"/>`);
           const compiled = fixture.nativeElement;
           const inputEl = getNativeInput(compiled);

           fixture.whenStable().then(() => {
             changeInput(compiled, 'on');
             fixture.detectChanges();
             expectWindowResults(compiled, ['+one', 'one more']);
             expect(inputEl.value).toBe('one');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(3);

             const event = createKeyDownEvent(Key.ArrowDown);
             getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
             fixture.detectChanges();
             expect(inputEl.value).toBe('one more');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(8);
           });
         }));

      it('should show hint with no selection when an item does not starts with user input', async(() => {
           const fixture = createTestComponent(
               `<input type="text" [(ngModel)]="model" [ngbTypeahead]="findAnywhere" [showHint]="true"/>`);
           const compiled = fixture.nativeElement;
           const inputEl = getNativeInput(compiled);

           fixture.whenStable().then(() => {
             changeInput(compiled, 'ne');
             fixture.detectChanges();
             expectWindowResults(compiled, ['+one', 'one more']);
             expect(inputEl.value).toBe('one');
             expect(inputEl.selectionStart).toBe(inputEl.selectionEnd);

             const event = createKeyDownEvent(Key.ArrowDown);
             getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
             fixture.detectChanges();
             expect(inputEl.value).toBe('one more');
             expect(inputEl.selectionStart).toBe(inputEl.selectionEnd);
           });
         }));

      it('should take input formatter into account when displaying hints', async(() => {
           const fixture = createTestComponent(`<input type="text" [(ngModel)]="model"
                [ngbTypeahead]="findAnywhere"
                [inputFormatter]="uppercaseFormatter"
                [showHint]="true"/>`);
           const compiled = fixture.nativeElement;
           const inputEl = getNativeInput(compiled);

           fixture.whenStable().then(() => {
             changeInput(compiled, 'on');
             fixture.detectChanges();
             expectWindowResults(compiled, ['+one', 'one more']);
             expect(inputEl.value).toBe('onE');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(3);

             const event = createKeyDownEvent(Key.ArrowDown);
             getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
             fixture.detectChanges();
             expect(inputEl.value).toBe('onE MORE');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(8);
           });
         }));

      it('should restore hint when results window is dismissed', async(() => {
           const fixture = createTestComponent(
               `<input type="text" [(ngModel)]="model" [ngbTypeahead]="findAnywhere" [showHint]="true"/>`);
           fixture.detectChanges();
           const compiled = fixture.nativeElement;
           const inputEl = getNativeInput(compiled);

           fixture.whenStable().then(() => {
             changeInput(compiled, 'on');
             fixture.detectChanges();
             expectWindowResults(compiled, ['+one', 'one more']);
             expect(inputEl.value).toBe('one');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(3);

             const event = createKeyDownEvent(Key.Escape);
             getDebugInput(fixture.debugElement).triggerEventHandler('keydown', event);
             fixture.detectChanges();
             expect(inputEl.value).toBe('on');
             expect(inputEl.selectionStart).toBe(2);
             expect(inputEl.selectionEnd).toBe(2);
           });
         }));
    });

    describe('Custom config', () => {
      beforeEach(() => {
        TestBed.overrideComponent(
            TestComponent, {set: {template: '<input type="text" [(ngModel)]="model" [ngbTypeahead]="findAnywhere"/>'}});
      });

      beforeEach(inject([NgbTypeaheadConfig], (c: NgbTypeaheadConfig) => {
        c.showHint = true;
      }));

      it('should initialize inputs with provided config', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        const typeahead = fixture.componentInstance.typeahead;
        expect(typeahead.showHint).toBe(true);
      });
    });

    describe('Custom config as provider', () => {
      beforeEach(() => {
        const config = new NgbTypeaheadConfig();
        config.showHint = true;
        TestBed.configureTestingModule({providers: [{provide: NgbTypeaheadConfig, useValue: config}]});

        TestBed.overrideComponent(
            TestComponent, {set: {template: '<input type="text" [(ngModel)]="model" [ngbTypeahead]="findAnywhere"/>'}});
      });

      it('should initialize inputs with provided config as provider', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        const typeahead = fixture.componentInstance.typeahead;
        expect(typeahead.showHint).toBe(true);
      });
    });
  }
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  private _strings = ['one', 'one more', 'two', 'three'];
  private _objects =
      [{id: 1, value: 'one'}, {id: 10, value: 'one more'}, {id: 2, value: 'two'}, {id: 3, value: 'three'}];

  model: any;
  selectEventValue: any;
  show = true;

  form = new FormGroup({control: new FormControl('', Validators.required)});

  findOutput$: Observable<any[]>;

  @ViewChild(NgbTypeahead) typeahead: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  find = (text$: Observable<string>) => {
    this.findOutput$ = text$.merge(this.focus$)
                           .merge(this.click$.filter(() => !this.typeahead.isPopupOpen()))
                           .map(text => this._strings.filter(v => v.startsWith(text)));
    return this.findOutput$;
  };

  findAnywhere = (text$: Observable<string>) => {
    return text$.map(text => this._strings.filter(v => v.indexOf(text) > -1));
  };

  findNothing = (text$: Observable<string>) => {
    return text$.map(text => []);
  };

  findObjects = (text$: Observable<string>) => {
    return text$.map(text => this._objects.filter(v => v.value.startsWith(text)));
  };

  formatter = (obj: {id: number, value: string}) => {
    return `${obj.id} ${obj.value}`;
  };

  uppercaseFormatter = s => s.toUpperCase();

  uppercaseObjFormatter = (obj: {value: string}) => {
    return obj.value.toUpperCase();
  };

  onSelect($event) {
    this.selectEventValue = $event;
  }
}

@Component({selector: 'test-onpush-cmp', changeDetection: ChangeDetectionStrategy.OnPush, template: ''})
class TestOnPushComponent {
  private _strings = ['one', 'one more', 'two', 'three'];

  find = (text$: Observable<string>) => {
    return text$.debounceTime(200).map(text => this._strings.filter(v => v.startsWith(text)));
  };
}

@Component({selector: 'test-async-cmp', template: ''})
class TestAsyncComponent {
  private _strings = ['one', 'one more', 'two', 'three'];

  find = (text$: Observable<string>) => {
    return text$.debounceTime(200).map(text => this._strings.filter(v => v.startsWith(text)));
  };
}
