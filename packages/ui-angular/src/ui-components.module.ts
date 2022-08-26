import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    PcButton,
    PcModal,
    PcDropdown,
    PcDropdownListItem,
} from './lib/stencil-generated/components';



const DECLARATIONS = [
    PcButton,
    PcModal,
    PcDropdown,
    PcDropdownListItem
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class UiComponentsModule {
  static forRoot(config?: any): ModuleWithProviders<UiComponentsModule> {
    return {
      ngModule: UiComponentsModule,
    };
  }
}