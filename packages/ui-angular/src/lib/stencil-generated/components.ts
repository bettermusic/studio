/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@praisecharts/ui';




export declare interface PcButton extends Components.PcButton {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


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


export declare interface PcModal extends Components.PcModal {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pc-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
