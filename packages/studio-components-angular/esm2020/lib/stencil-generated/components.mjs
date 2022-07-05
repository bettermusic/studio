import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
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
export { PcsEditor };
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
export { PcsRenderer };
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
export { PcsStudio };
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
export { TestForAngular };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TestForAngular, decorators: [{
            type: Component,
            args: [{
                    selector: 'test-for-angular',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZ3VsYXIvcHJvamVjdHMvc3R1ZGlvLWNvbXBvbmVudHMtYW5ndWxhci9zcmMvbGliL3N0ZW5jaWwtZ2VuZXJhdGVkL2NvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBeUIxRCxTQUFTLFNBQVQsU0FBUztJQUVwQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUE7dUdBUFksU0FBUzsyRkFBVCxTQUFTLDRGQUhWLDJCQUEyQjtBQUcxQixTQUFTO0lBVnJCLFFBQVEsQ0FBQztRQUNSLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQ3pCLENBQUM7R0FPVyxTQUFTLENBT3JCO1NBUFksU0FBUzs0RkFBVCxTQUFTO2tCQU5yQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUN6Qjs7SUF1QlksV0FBVyxTQUFYLFdBQVc7SUFFdEIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7eUdBTlksV0FBVzs2RkFBWCxXQUFXLDRGQUhaLDJCQUEyQjtBQUcxQixXQUFXO0lBVnZCLFFBQVEsQ0FBQztRQUNSLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztLQUN6QixDQUFDO0dBT1csV0FBVyxDQU12QjtTQU5ZLFdBQVc7NEZBQVgsV0FBVztrQkFOdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7aUJBQ3pCOztJQW9CWSxTQUFTLFNBQVQsU0FBUztJQUVwQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTt1R0FOWSxTQUFTOzJGQUFULFNBQVMsa0RBRlYsMkJBQTJCO0FBRTFCLFNBQVM7SUFSckIsUUFBUSxDQUFDO1FBQ1IscUJBQXFCLEVBQUUsU0FBUztLQUNqQyxDQUFDO0dBTVcsU0FBUyxDQU1yQjtTQU5ZLFNBQVM7NEZBQVQsU0FBUztrQkFMckIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOztJQW9CWSxjQUFjLFNBQWQsY0FBYztJQUV6QixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTs0R0FOWSxjQUFjO2dHQUFkLGNBQWMsd0RBRmYsMkJBQTJCO0FBRTFCLGNBQWM7SUFSMUIsUUFBUSxDQUFDO1FBQ1IscUJBQXFCLEVBQUUsU0FBUztLQUNqQyxDQUFDO0dBTVcsY0FBYyxDQU0xQjtTQU5ZLGNBQWM7NEZBQWQsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnQHByYWlzZWNoYXJ0cy9zdHVkaW8tY29tcG9uZW50cyc7XG5cblxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBQY3NFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnRzLlBjc0VkaXRvciB7XG4gIC8qKlxuICAgKiAgXG4gICAqL1xuICBjaG9yZFByb1VwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxzdHJpbmc+PjtcblxufVxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IHVuZGVmaW5lZCxcbiAgaW5wdXRzOiBbJ2luaXRpYWxWYWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGNzLWVkaXRvcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnaW5pdGlhbFZhbHVlJ11cbn0pXG5leHBvcnQgY2xhc3MgUGNzRWRpdG9yIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnY2hvcmRQcm9VcGRhdGVkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBjc1JlbmRlcmVyIGV4dGVuZHMgQ29tcG9uZW50cy5QY3NSZW5kZXJlciB7fVxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IHVuZGVmaW5lZCxcbiAgaW5wdXRzOiBbJ2h0bWwnLCAnbW9kZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGNzLXJlbmRlcmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydodG1sJywgJ21vZGUnXVxufSlcbmV4cG9ydCBjbGFzcyBQY3NSZW5kZXJlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBjc1N0dWRpbyBleHRlbmRzIENvbXBvbmVudHMuUGNzU3R1ZGlvIHt9XG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogdW5kZWZpbmVkXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGNzLXN0dWRpbycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIFBjc1N0dWRpbyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRlc3RGb3JBbmd1bGFyIGV4dGVuZHMgQ29tcG9uZW50cy5UZXN0Rm9yQW5ndWxhciB7fVxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IHVuZGVmaW5lZFxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtZm9yLWFuZ3VsYXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0Rm9yQW5ndWxhciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=