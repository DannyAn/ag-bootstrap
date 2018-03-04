import {
  AfterContentChecked,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';

import {isString} from '../util/util';

import {NgbAccordionConfig} from './accordion-config';

let nextId = 0;

/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
@Directive({selector: 'ng-template[ngbPanelTitle]'})
export class NgbPanelTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * This directive must be used to wrap accordion panel content.
 */
@Directive({selector: 'ng-template[ngbPanelContent]'})
export class NgbPanelContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
@Directive({selector: 'ngb-panel'})
export class NgbPanel {
  /**
   *  A flag determining whether the panel is disabled or not.
   *  When disabled, the panel cannot be toggled.
   */
  @Input() disabled = false;

  /**
   *  An optional id for the panel. The id should be unique.
   *  If not provided, it will be auto-generated.
   */
  @Input() id = `ngb-panel-${nextId++}`;

  /**
   * A flag telling if the panel is currently open
   */
  isOpen = false;

  /**
   *  The title for the panel.
   */
  @Input() title: string;

  /**
   *  Accordion's types of panels to be applied per panel basis.
   *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
   */
  @Input() type: string;

  @ContentChild(NgbPanelContent) contentTpl: NgbPanelContent;
  @ContentChild(NgbPanelTitle) titleTpl: NgbPanelTitle;
}

/**
 * The payload of the change event fired right before toggling an accordion panel
 */
export interface NgbPanelChangeEvent {
  /**
   * Id of the accordion panel that is toggled
   */
  panelId: string;

  /**
   * Whether the panel will be opened (true) or closed (false)
   */
  nextState: boolean;

  /**
   * Function that will prevent panel toggling if called
   */
  preventDefault: () => void;
}

/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
@Component({
  selector: 'ngb-accordion',
  exportAs: 'ngbAccordion',
  host: {'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels'},
  template: `
    <ng-template ngFor let-panel [ngForOf]="panels">
      <div class="card">
        <div role="tab" id="{{panel.id}}-header"
          [class]="'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')" [class.active]="panel.isOpen">
          <a href (click)="!!toggle(panel.id)" [class.text-muted]="panel.disabled" [attr.tabindex]="(panel.disabled ? '-1' : null)"
            [attr.aria-expanded]="panel.isOpen" [attr.aria-controls]="(panel.isOpen ? panel.id : null)"
            [attr.aria-disabled]="panel.disabled">
            {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
          </a>
        </div>
        <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
             class="card-body collapse {{panel.isOpen ? 'show' : null}}" *ngIf="!destroyOnHide || panel.isOpen">
             <ng-template [ngTemplateOutlet]="panel.contentTpl.templateRef"></ng-template>
        </div>
      </div>
    </ng-template>
  `
})
export class NgbAccordion implements AfterContentChecked {
  @ContentChildren(NgbPanel) panels: QueryList<NgbPanel>;

  /**
   * An array or comma separated strings of panel identifiers that should be opened
   */
  @Input() activeIds: string | string[] = [];

  /**
   *  Whether the other panels should be closed when a panel is opened
   */
  @Input('closeOthers') closeOtherPanels: boolean;

  /**
   * Whether the closed panels should be hidden without destroying them
   */
  @Input() destroyOnHide: boolean = true;

  /**
   *  Accordion's types of panels to be applied globally.
   *  Bootstrap 4 recognizes the following types: "success", "info", "warning" and "danger".
   */
  @Input() type: string;

  /**
   * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
   */
  @Output() panelChange = new EventEmitter<NgbPanelChangeEvent>();

  constructor(config: NgbAccordionConfig) {
    this.type = config.type;
    this.closeOtherPanels = config.closeOthers;
  }

  /**
   * Programmatically toggle a panel with a given id.
   */
  toggle(panelId: string) {
    const panel = this.panels.find(p => p.id === panelId);

    if (panel && !panel.disabled) {
      let defaultPrevented = false;

      this.panelChange.emit(
          {panelId: panelId, nextState: !panel.isOpen, preventDefault: () => { defaultPrevented = true; }});

      if (!defaultPrevented) {
        panel.isOpen = !panel.isOpen;

        if (this.closeOtherPanels) {
          this._closeOthers(panelId);
        }
        this._updateActiveIds();
      }
    }
  }

  ngAfterContentChecked() {
    // active id updates
    if (isString(this.activeIds)) {
      this.activeIds = this.activeIds.split(/\s*,\s*/);
    }

    // update panels open states
    this.panels.forEach(panel => panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1);

    // closeOthers updates
    if (this.activeIds.length > 1 && this.closeOtherPanels) {
      this._closeOthers(this.activeIds[0]);
      this._updateActiveIds();
    }
  }

  private _closeOthers(panelId: string) {
    this.panels.forEach(panel => {
      if (panel.id !== panelId) {
        panel.isOpen = false;
      }
    });
  }

  private _updateActiveIds() {
    this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
  }
}
