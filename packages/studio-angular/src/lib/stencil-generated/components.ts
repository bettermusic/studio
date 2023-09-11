/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@bettermusic/studio';




export declare interface BmButtonDropdown extends Components.BmButtonDropdown {
  /**
   * When value changed 
   */
  changed: EventEmitter<CustomEvent<{ val: any; id: string; originalEvent?: MouseEvent }>>;
  /**
   * Before element close, can be prevented 
   */
  close: EventEmitter<CustomEvent<any>>;
  /**
   * Before element open, can be prevented 
   */
  open: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoClose', 'autoFocus', 'autocomplete', 'buttonLabel', 'currentFilter', 'dataId', 'dataLabel', 'dropdownId', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value'],
  methods: ['doClose', 'doOpen', 'doChange']
})
@Component({
  selector: 'bm-button-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoClose', 'autoFocus', 'autocomplete', 'buttonLabel', 'currentFilter', 'dataId', 'dataLabel', 'dropdownId', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value']
})
export class BmButtonDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed', 'close', 'open']);
  }
}


export declare interface BmButtonGroup extends Components.BmButtonGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['combined', 'containerProps']
})
@Component({
  selector: 'bm-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['combined', 'containerProps']
})
export class BmButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmDropdownShell extends Components.BmDropdownShell {
  /**
   * When value changed 
   */
  changed: EventEmitter<CustomEvent<{ val: any; id: string; originalEvent?: MouseEvent }>>;
  /**
   * Before element close, can be prevented 
   */
  close: EventEmitter<CustomEvent<any>>;
  /**
   * Before element open, can be prevented 
   */
  open: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoClose', 'autoFocus', 'autocomplete', 'buttonLabel', 'currentFilter', 'dataId', 'dataLabel', 'dropdownId', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value'],
  methods: ['doClose', 'doOpen', 'doChange']
})
@Component({
  selector: 'bm-dropdown-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoClose', 'autoFocus', 'autocomplete', 'buttonLabel', 'currentFilter', 'dataId', 'dataLabel', 'dropdownId', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value']
})
export class BmDropdownShell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed', 'close', 'open']);
  }
}


export declare interface BmEditor extends Components.BmEditor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initialValue']
})
@Component({
  selector: 'bm-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initialValue']
})
export class BmEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmEditorHeader extends Components.BmEditorHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-editor-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmEditorHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmEditorSplitView extends Components.BmEditorSplitView {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-editor-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmEditorSplitView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTextEditor extends Components.BmTextEditor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initialValue'],
  methods: ['setCapo']
})
@Component({
  selector: 'bm-text-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initialValue']
})
export class BmTextEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmView extends Components.BmView {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['html', 'mode']
})
@Component({
  selector: 'bm-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['html', 'mode']
})
export class BmView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
