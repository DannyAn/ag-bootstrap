import {CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair} from '@angular/cdk/overlay';
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime} from 'rxjs/operators/debounceTime';
import {mapTo} from 'rxjs/operators/mapTo';
import {merge} from 'rxjs/operators/merge';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

import {dropDownAnimation} from '../core/animation/dropdown-animations';
import {DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP} from '../core/overlay/overlay-position-map';
import {NzMenuComponent} from '../menu/nz-menu.component';
import {toBoolean} from '../util/convert';

import {NzDropDownDirective} from './nz-dropdown.directive';

export type NzPlacement = 'bottomLeft'|'bottomCenter'|'bottomRight'|'topLeft'|'topCenter'|'topRight';
//[@dropDownAnimation]="_dropDownPosition"
@Component({
  selector: 'nz-dropdown',
  encapsulation: ViewEncapsulation.None,
  animations: [dropDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="nz-dropdown">
    <div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_nzOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="nzVisible"
    >
      <div
        class="{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}"
        
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div [class.ant-table-filter-dropdown]="hasFilterButton">
          <ng-content select="[nz-menu]"></ng-content>
          <ng-content select="[nz-table-filter]"></ng-content>
        </div>
        <ng-content select="[nz-dropdown-custom]"></ng-content>
      </div>
    </ng-template>
    <div>`,
  styleUrls: []
})

export class NzDropDownComponent implements OnInit, OnDestroy, AfterViewInit {
  private _clickHide = true;
  private _visible = false;
  hasFilterButton = false;
  _triggerWidth = 0;
  _placement: NzPlacement = 'bottomLeft';
  _dropDownPosition: 'top'|'center'|'bottom' = 'bottom';
  _positions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS];
  _subscription: Subscription;
  @ContentChild(NzDropDownDirective) _nzOrigin;
  @ContentChild(NzMenuComponent) _nzMenu;
  @Input() nzTrigger: 'click'|'hover' = 'hover';
  @Output() _visibleChange = new Subject<boolean>();
  @Output() nzVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(CdkConnectedOverlay) _cdkOverlay: CdkConnectedOverlay;

  @Input()
  set nzClickHide(value: boolean) {
    this._clickHide = toBoolean(value);
  }

  get nzClickHide(): boolean {
    return this._clickHide;
  }

  @Input()
  set nzVisible(value: boolean) {
    this._visible = toBoolean(value);
  }

  get nzVisible(): boolean {
    return this._visible;
  }

  @Input()
  set nzPlacement(value: NzPlacement) {
    this._placement = value;
    this._dropDownPosition = (this.nzPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
    this._positions.unshift(POSITION_MAP[this._placement] as ConnectionPositionPair);
  }

  get nzPlacement(): NzPlacement {
    return this._placement;
  }

  _onClickEvent(): void {
    if (this.nzTrigger === 'click') {
      this._show();
    }
  }

  _onMouseEnterEvent(e: MouseEvent): void {
    if (this.nzTrigger === 'hover') {
      this._show();
    }
  }

  _onMouseLeaveEvent(e: MouseEvent): void {
    if (this.nzTrigger === 'hover') {
      this._hide();
    }
  }

  _hide(): void {
    this._visibleChange.next(false);
  }

  _show(): void {
    console.log('dropdown show.');
    this._visibleChange.next(true);
  }

  _onPositionChange(position: ConnectedOverlayPositionChange): void {
    this._dropDownPosition = position.connectionPair.originY;
  }

  _clickDropDown($event: MouseEvent): void {
    console.log('clickDropDown.');
    $event.stopPropagation();
    if (this.nzClickHide) {
      this._hide();
    }
  }

  _setTriggerWidth(): void {
    this._triggerWidth = this._nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    /** should remove after https://github.com/angular/material2/pull/8765 merged **/
    if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
      this._cdkOverlay.overlayRef.updateSize({minWidth: this._triggerWidth});
    }
  }

  _onVisibleChange =
      (visible: boolean) => {
        if (visible) {
          this._setTriggerWidth();
        }
        if (this.nzVisible !== visible) {
          this.nzVisible = visible;
          this.nzVisibleChange.emit(this.nzVisible);
        }
        this._changeDetector.markForCheck();
      }

  _startSubscribe(observable$: Observable<boolean>): void {
    this._subscription = observable$.pipe(debounceTime(50)).subscribe(this._onVisibleChange);
  }

  ngOnInit(): void {
    if (this._nzMenu) {
      this._nzMenu.setDropDown(true);
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    let mouse$: Observable<boolean>;
    if (this.nzTrigger === 'hover') {
      const mouseEnterOrigin$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo(true));
      const mouseLeaveOrigin$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo(false));
      mouse$ = mouseEnterOrigin$.pipe(merge(mouseLeaveOrigin$));
    }
    if (this.nzTrigger === 'click') {
      mouse$ = fromEvent(this._nzOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
      this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'click', (e) => {
        e.preventDefault();
      });
    }
    const observable$ = mouse$.pipe(merge(this._visibleChange));
    this._startSubscribe(observable$);
  }

  get _hasBackdrop(): boolean {
    return this.nzTrigger === 'click';
  }

  constructor(private _renderer: Renderer2, protected _changeDetector: ChangeDetectorRef) {}
}
