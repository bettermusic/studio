/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@praisecharts/studio-components';




export declare interface PcsEditor extends Components.PcsEditor {
  /**
   *  
   */
  chordProUpdated: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initialValue']
})
@Component({
  selector: 'pcs-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initialValue']
})
export class PcsEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['chordProUpdated']);
  }
}


export declare interface PcsRenderer extends Components.PcsRenderer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['html', 'mode']
})
@Component({
  selector: 'pcs-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['html', 'mode']
})
export class PcsRenderer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PcsStudio extends Components.PcsStudio {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'pcs-studio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PcsStudio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TestForAngular extends Components.TestForAngular {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'test-for-angular',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TestForAngular {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
