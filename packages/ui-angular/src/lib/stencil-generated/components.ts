/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@bettermusic/ui';




export declare interface BmButton extends Components.BmButton {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmDropdown extends Components.BmDropdown {
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
  selector: 'bm-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appendTo', 'autoClose', 'autoFocus', 'autocomplete', 'currentFilter', 'dataId', 'dataLabel', 'filter', 'hasFilter', 'maxHeight', 'placeholder', 'source', 'value']
})
export class BmDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed', 'close', 'open']);
  }
}


export declare interface BmDropdownListItem extends Components.BmDropdownListItem {
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
  selector: 'bm-dropdown-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataLabel', 'isFocused', 'sourceItems']
})
export class BmDropdownListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
  }
}


export declare interface BmModal extends Components.BmModal {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
