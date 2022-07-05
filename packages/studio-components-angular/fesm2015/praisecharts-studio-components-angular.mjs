import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

/* eslint-disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach(item => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            }
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach(methodName => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined &&
        typeof customElements !== 'undefined' &&
        !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let PcsEditor = class PcsEditor {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['chordProUpdated']);
    }
};
PcsEditor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsEditor, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PcsEditor.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PcsEditor, selector: "pcs-editor", inputs: { initialValue: "initialValue" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PcsEditor = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['initialValue']
    })
], PcsEditor);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsEditor, decorators: [{
            type: Component,
            args: [{
                    selector: 'pcs-editor',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['initialValue']
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let PcsRenderer = class PcsRenderer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
PcsRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsRenderer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PcsRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PcsRenderer, selector: "pcs-renderer", inputs: { html: "html", mode: "mode" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PcsRenderer = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['html', 'mode']
    })
], PcsRenderer);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'pcs-renderer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['html', 'mode']
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let PcsStudio = class PcsStudio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
PcsStudio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsStudio, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PcsStudio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PcsStudio, selector: "pcs-studio", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PcsStudio = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined
    })
], PcsStudio);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PcsStudio, decorators: [{
            type: Component,
            args: [{
                    selector: 'pcs-studio',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let TestForAngular = class TestForAngular {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
TestForAngular.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TestForAngular, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TestForAngular.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TestForAngular, selector: "test-for-angular", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
TestForAngular = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined
    })
], TestForAngular);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TestForAngular, decorators: [{
            type: Component,
            args: [{
                    selector: 'test-for-angular',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

const DECLARATIONS = [
    TestForAngular,
    PcsStudio,
    PcsEditor,
    PcsRenderer,
];
class StudioComponentsModule {
    static forRoot(config) {
        return {
            ngModule: StudioComponentsModule,
        };
    }
}
StudioComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StudioComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StudioComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StudioComponentsModule, declarations: [TestForAngular,
        PcsStudio,
        PcsEditor,
        PcsRenderer], imports: [CommonModule], exports: [TestForAngular,
        PcsStudio,
        PcsEditor,
        PcsRenderer] });
StudioComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StudioComponentsModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StudioComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [CommonModule],
                }]
        }] });

/*
 * Public API Surface of studio-components-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PcsEditor, PcsRenderer, PcsStudio, StudioComponentsModule, TestForAngular };
//# sourceMappingURL=praisecharts-studio-components-angular.mjs.map
