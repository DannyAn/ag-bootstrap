import {Component} from '@angular/core';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {createGenericTestComponent} from '../test/common';

import {NgbAlert} from './alert';
import {NgbAlertConfig} from './alert-config';
import {NgbAlertModule} from './alert.module';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getAlertElement(element: HTMLElement): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.alert');
}

function getCloseButton(element: HTMLElement): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

describe('ngb-alert', () => {
  beforeEach(
      () => { TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgbAlertModule.forRoot()]}); });

  it('should initialize inputs with default values', () => {
    const defaultConfig = new NgbAlertConfig();
    const alertCmp = new NgbAlert(new NgbAlertConfig());

    expect(alertCmp.dismissible).toBe(defaultConfig.dismissible);
    expect(alertCmp.type).toBe(defaultConfig.type);
  });

  it('should allow specifying alert type', () => {
    const fixture = createTestComponent('<ngb-alert type="success">Cool!</ngb-alert>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl.getAttribute('role')).toEqual('alert');
    expect(alertEl).toHaveCssClass('alert-success');
  });

  it('should render close button and have "alert-dismissible" CSS class when dismissible', () => {
    const fixture = createTestComponent('<ngb-alert [dismissible]="true">Watch out!</ngb-alert>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl).toHaveCssClass('alert-dismissible');
    expect(getCloseButton(alertEl)).toBeTruthy();
  });

  it('should render close button and not have "alert-dismissible" CSS class only if dismissible', () => {
    const fixture = createTestComponent(`<ngb-alert [dismissible]="false">Don't close!</ngb-alert>`);
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl).not.toHaveCssClass('alert-dismissible');
    expect(getCloseButton(getAlertElement(fixture.nativeElement))).toBeFalsy();
  });

  describe('Custom config', () => {
    let config: NgbAlertConfig;

    beforeEach(() => { TestBed.configureTestingModule({imports: [NgbAlertModule.forRoot()]}); });

    beforeEach(inject([NgbAlertConfig], (c: NgbAlertConfig) => {
      config = c;
      config.dismissible = false;
      config.type = 'success';
    }));

    it('should initialize inputs with provided config', () => {
      const fixture = TestBed.createComponent(NgbAlert);
      fixture.detectChanges();

      const alert = fixture.componentInstance;
      expect(alert.dismissible).toBe(config.dismissible);
      expect(alert.type).toBe(config.type);
    });
  });

  describe('Custom config as provider', () => {
    let config = new NgbAlertConfig();
    config.dismissible = false;
    config.type = 'success';

    beforeEach(() => {
      TestBed.configureTestingModule(
          {imports: [NgbAlertModule.forRoot()], providers: [{provide: NgbAlertConfig, useValue: config}]});
    });

    it('should initialize inputs with provided config as provider', () => {
      const fixture = TestBed.createComponent(NgbAlert);
      fixture.detectChanges();

      const alert = fixture.componentInstance;
      expect(alert.dismissible).toBe(config.dismissible);
      expect(alert.type).toBe(config.type);
    });
  });
});

@Component({selector: 'test-cmp', template: '', entryComponents: [NgbAlert]})
class TestComponent {
  name = 'World';
  closed = false;
}
