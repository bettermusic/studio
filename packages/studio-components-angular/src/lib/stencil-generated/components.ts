/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@praisecharts/studio-components';




export declare interface PcDropdown extends Components.PcDropdown {
  /**
   * When value changed 
   */
  changed: EventEmitter<CustomEvent<{ val: any; originalEvent?: MouseEvent }>>;
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
  inputs: ['appendTo', 'autoClose', 'autoFocus', 'autocomplete', 'currentFilter', 'dataId', 'dataLabel', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value'],
  methods: ['doClose', 'doOpen', 'doChange']
})
@Component({
  selector: 'pc-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appendTo', 'autoClose', 'autoFocus', 'autocomplete', 'currentFilter', 'dataId', 'dataLabel', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value']
})
export class PcDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed', 'close', 'open']);
  }
}


export declare interface PcDropdownListItem extends Components.PcDropdownListItem {
  /**
   *  
   */
  changed: EventEmitter<CustomEvent<{ item: any; e: any }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataLabel', 'isFocused', 'sourceItems'],
  methods: ['refresh']
})
@Component({
  selector: 'pc-dropdown-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataLabel', 'isFocused', 'sourceItems']
})
export class PcDropdownListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
  }
}


export declare interface PcEditor extends Components.PcEditor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initialValue'],
  methods: ['setCapo']
})
@Component({
  selector: 'pc-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initialValue']
})
export class PcEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcEditorCapoDropdown extends Components.PcEditorCapoDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-editor-capo-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcEditorCapoDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcEditorKeyDropdown extends Components.PcEditorKeyDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-editor-key-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcEditorKeyDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcEditorModeDropdown extends Components.PcEditorModeDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-editor-mode-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcEditorModeDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcEditorSplitView extends Components.PcEditorSplitView {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-editor-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcEditorSplitView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcRenderer extends Components.PcRenderer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['html', 'mode']
})
@Component({
  selector: 'pc-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['html', 'mode']
})
export class PcRenderer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
