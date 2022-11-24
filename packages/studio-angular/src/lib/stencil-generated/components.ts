/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@bettermusic/studio';




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


export declare interface BmEditorCapoDropdown extends Components.BmEditorCapoDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-editor-capo-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmEditorCapoDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmEditorKeyDropdown extends Components.BmEditorKeyDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-editor-key-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmEditorKeyDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmEditorModeDropdown extends Components.BmEditorModeDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'bm-editor-mode-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BmEditorModeDropdown {
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
