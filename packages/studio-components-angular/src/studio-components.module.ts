import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    PcStudio,
    PcEditor,
    PcRenderer,
    TestForAngular 
  } from './lib/stencil-generated/components';



const DECLARATIONS = [
    TestForAngular,
    PcStudio,
    PcEditor,
    PcRenderer,
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