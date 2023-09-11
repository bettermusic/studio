import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    BmEditorSplitView,
    BmEditor,
    BmView
} from './lib/stencil-generated/components';



const DECLARATIONS = [
    BmEditorSplitView,
    BmEditor,
    BmView
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