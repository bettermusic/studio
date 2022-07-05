import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    PcsStudio,
    PcsEditor,
    PcsRenderer,
    TestForAngular 
  } from './lib/stencil-generated/components';



const DECLARATIONS = [
    TestForAngular,
    PcsStudio,
    PcsEditor,
    PcsRenderer,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class StudioComponentsModule {
  static forRoot(config?: any): ModuleWithProviders<StudioComponentsModule> {
    return {
      ngModule: StudioComponentsModule,
    };
  }
}