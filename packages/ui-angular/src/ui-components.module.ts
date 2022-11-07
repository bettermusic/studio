import { CommonModule, DOCUMENT } from '@angular/common';
import { ModuleWithProviders, APP_INITIALIZER, NgModule, NgZone } from '@angular/core';

import { 
    BmButton,
    BmModal,
    BmDropdown,
    BmDropdownListItem,
} from './lib/stencil-generated/components';



const DECLARATIONS = [
    BmButton,
    BmModal,
    BmDropdown,
    BmDropdownListItem
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