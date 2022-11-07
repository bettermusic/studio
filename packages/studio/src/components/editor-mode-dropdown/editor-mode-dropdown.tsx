import { Component, Host, h, Listen } from '@stencil/core';
import state from "../../stores/editor_store";

@Component({
  tag: 'bm-editor-mode-dropdown',
  styleUrl: 'editor-mode-dropdown.css',
})
export class BmKeyDropdown {

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
        <bm-dropdown dataLabel="label" dataId="mode" source={state.editorModes} value={this.editorMode} hasFilter={false} placeholder="Mode" maxHeight={400}></bm-dropdown>
      </Host>
    );
  }
}
