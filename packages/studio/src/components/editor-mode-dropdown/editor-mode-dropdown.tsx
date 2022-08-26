import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../stores/editor_store";

@Component({
  tag: 'pc-editor-mode-dropdown',
  styleUrl: 'editor-mode-dropdown.css',
})
export class PcKeyDropdown {

  @Listen('changed')
  dropDownChangedHandler(event: CustomEvent) {
    state.editorMode = event.detail.val;
  }
  
  editorMode:string;

  componentWillRender() {
    const modeIndex = state.editorModes.findIndex(mode => mode.mode === state.editorMode);
    this.editorMode = state.editorModes[modeIndex];    
  }

  render() {
    return (
      <Host>
        <pc-dropdown dataLabel="label" dataId="mode" source={state.editorModes} value={this.editorMode} hasFilter={false} placeholder="Mode" maxHeight={400}></pc-dropdown>
      </Host>
    );
  }
}
