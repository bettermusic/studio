import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../../stores/editor_store";

@Component({
  tag: 'bm-editor-capo-dropdown',
  styleUrl: 'editor-capo-dropdown.css',
})
export class BmCapoDropdown {

  @Listen('changed')
  dropDownChangedHandler(event: CustomEvent) {
    state.capo = event.detail.val
  }
  
  currentCapo: any;

  componentWillRender() {
    const modeIndex = state.capos.findIndex(capo => capo.position === state.capo);
    this.currentCapo = state.capos[modeIndex]; 
  }

  render() {
    return (
      <Host>
        <bm-dropdown dataLabel="label" dataId="position" source={state.capos} value={this.currentCapo} placeholder="Capo" maxHeight={400}></bm-dropdown>
      </Host>
    );
  }
}
