import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    PcEditorSplitView,
    PcEditor,
    PcRenderer
} from './lib/stencil-generated/components';



const DECLARATIONS = [
    PcEditorSplitView,
    PcEditor,
    PcRenderer
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