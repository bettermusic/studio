import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PcsStudio, PcsEditor, PcsRenderer, TestForAngular } from './lib/stencil-generated/components';
import * as i0 from "@angular/core";
const DECLARATIONS = [
    TestForAngular,
    PcsStudio,
    PcsEditor,
    PcsRenderer,
];
export class StudioComponentsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGlvLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYW5ndWxhci9wcm9qZWN0cy9zdHVkaW8tY29tcG9uZW50cy1hbmd1bGFyL3NyYy9zdHVkaW8tY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBd0MsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxjQUFjLEVBQ2YsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFJOUMsTUFBTSxZQUFZLEdBQUc7SUFDakIsY0FBYztJQUNkLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztDQUNkLENBQUM7QUFPRixNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBWTtRQUN6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFzQjtTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7b0hBTFUsc0JBQXNCO3FIQUF0QixzQkFBc0IsaUJBWC9CLGNBQWM7UUFDZCxTQUFTO1FBQ1QsU0FBUztRQUNULFdBQVcsYUFNSCxZQUFZLGFBVHBCLGNBQWM7UUFDZCxTQUFTO1FBQ1QsU0FBUztRQUNULFdBQVc7cUhBUUYsc0JBQXNCLFlBRnhCLENBQUMsWUFBWSxDQUFDOzRGQUVaLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgICBQY3NTdHVkaW8sXG4gICAgUGNzRWRpdG9yLFxuICAgIFBjc1JlbmRlcmVyLFxuICAgIFRlc3RGb3JBbmd1bGFyIFxuICB9IGZyb20gJy4vbGliL3N0ZW5jaWwtZ2VuZXJhdGVkL2NvbXBvbmVudHMnO1xuXG5cblxuY29uc3QgREVDTEFSQVRJT05TID0gW1xuICAgIFRlc3RGb3JBbmd1bGFyLFxuICAgIFBjc1N0dWRpbyxcbiAgICBQY3NFZGl0b3IsXG4gICAgUGNzUmVuZGVyZXIsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OUyxcbiAgZXhwb3J0czogREVDTEFSQVRJT05TLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGlvQ29tcG9uZW50c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3R1ZGlvQ29tcG9uZW50c01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3R1ZGlvQ29tcG9uZW50c01vZHVsZSxcbiAgICB9O1xuICB9XG59Il19