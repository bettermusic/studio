import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../stores/editor_store";

@Component({
  tag: 'bm-editor-key-dropdown',
  styleUrl: 'editor-key-dropdown.css',
})
export class BmKeyDropdown {

  @Listen('changed')
  dropDownChangedHandler(event: CustomEvent) {
    state.currentKey = event.detail.val
    if (state.capo) {
      state.capo = null;
    }
  }


  render() {
    return (
      <Host>
        <bm-dropdown dataLabel="name" dataId="name" source={state.keys} value={state.currentKey} placeholder="Key" maxHeight={400}></bm-dropdown>
      </Host>
    );
  }
}
