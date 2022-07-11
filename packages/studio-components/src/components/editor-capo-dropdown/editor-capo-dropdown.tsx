import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../utils/store";

@Component({
  tag: 'pc-editor-capo-dropdown',
  styleUrl: 'editor-capo-dropdown.css',
})
export class PcCapoDropdown {

    @Listen('changed')
    dropDownChangedHandler(event: CustomEvent) {
      state.capo = event.detail.val
    }

  render() {
    return (
      <Host>
        <pc-dropdown dataLabel="label" dataId="position" source={state.capos} value={state.capo} placeholder="Capo" maxHeight={400}></pc-dropdown>
      </Host>
    );
  }
}
