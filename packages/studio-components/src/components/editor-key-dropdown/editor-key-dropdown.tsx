import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../stores/editor_store";

@Component({
  tag: 'pc-editor-key-dropdown',
  styleUrl: 'editor-key-dropdown.css',
})
export class PcKeyDropdown {

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
        <pc-dropdown dataLabel="name" dataId="name" source={state.keys} value={state.currentKey} placeholder="Key" maxHeight={400}></pc-dropdown>
      </Host>
    );
  }
}
