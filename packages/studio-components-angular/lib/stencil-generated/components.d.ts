import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@praisecharts/studio-components';
import * as i0 from "@angular/core";
export declare interface PcsEditor extends Components.PcsEditor {
    /**
     *
     */
    chordProUpdated: EventEmitter<CustomEvent<string>>;
}
export declare class PcsEditor {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<PcsEditor, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PcsEditor, "pcs-editor", never, { "initialValue": "initialValue"; }, {}, never, ["*"]>;
}
export declare interface PcsRenderer extends Components.PcsRenderer {
}
export declare class PcsRenderer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<PcsRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PcsRenderer, "pcs-renderer", never, { "html": "html"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface PcsStudio extends Components.PcsStudio {
}
export declare class PcsStudio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<PcsStudio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PcsStudio, "pcs-studio", never, {}, {}, never, ["*"]>;
}
export declare interface TestForAngular extends Components.TestForAngular {
}
export declare class TestForAngular {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<TestForAngular, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TestForAngular, "test-for-angular", never, {}, {}, never, ["*"]>;
}
