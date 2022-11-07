import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    BmEditorSplitView,
    BmEditor,
    BmRenderer
} from './lib/stencil-generated/components';



const DECLARATIONS = [
    BmEditorSplitView,
    BmEditor,
    BmRenderer
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