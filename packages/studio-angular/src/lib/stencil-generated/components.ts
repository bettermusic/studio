/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@bettermusic/studio';




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
