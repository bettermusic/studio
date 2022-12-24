import { Component, h, Host, Listen } from '@stencil/core';
import state from '../../../stores/editor_store';

@Component({
  tag: 'bm-editor-header',
  styleUrl: 'editor-header.css',
  scoped: true,
})
export class EditorHeader {
  @Listen('changed')
  dropDownChangedHandler(event: CustomEvent) {
    switch (event.detail.id) {
      case 'key':
        state.currentKey = event.detail.val;
        this.currentCapo = state.capos[0];
        break;
      case 'capo':
        state.capo = event.detail.val.position;
        this.currentCapo = state.capos[event.detail.val];
        break;
    }
  }

  editorMode: string;
  currentCapo: any;

  componentWillRender() {
    const capoIndex = state.capos.findIndex(capo => capo.position === state.capo);
    if (capoIndex > 0) {
      this.currentCapo = state.capos[capoIndex];
    } else {
      this.currentCapo = state.capos[0];
    }
  }

  render() {
    return (
      <Host>
        <div class="flex-initial flex items-center">
          <img class="rounded shadow-sm h-auto w-8" src="https://cdn-assets.praisecharts.com/content/albums/600x600/album_10701.jpg"></img>
          <div class="flex-col ml-2 text-sm text-primary pr-4">
            <strong>Rattle!</strong>
            <h6 class="text-xs text-gray-500">Elevation Worship</h6>
          </div>
          <bm-button-group combined={true}>
            <bm-button-dropdown id="key" dataLabel="name" dataId="name" source={state.keys} value={state.currentKey} placeholder="Key" maxHeight={400}></bm-button-dropdown>
            <bm-button-dropdown
              id="capo"
              buttonLabel="buttonLabel"
              dataLabel="itemText"
              source={state.capos}
              value={this.currentCapo}
              placeholder="Capo"
              maxHeight={400}
            ></bm-button-dropdown>
          </bm-button-group>
        </div>
        <div class="flex-1 flex justify-end space-x-2 text-gray-700 w-100">
          <bm-button-group combined={true}>
            <bm-button size="icon" color="secondary" startIcon="edit"></bm-button>
            <bm-button size="icon" color="secondary" startIcon="settings"></bm-button>
          </bm-button-group>
          <bm-button-group combined={true} slot="dropdown-button">
            <bm-dropdown-shell>
              <bm-button slot="dropdown-button" size="base" color="secondary" text="4/4"></bm-button>
              <div slot="dropdown-content" class="p-4 bg-gray-100 border border-gray-300 rounded">
                dropdown content!
              </div>
            </bm-dropdown-shell>
            <bm-dropdown-shell>
              <bm-button slot="dropdown-button" size="base" color="secondary" startIcon="settings" text="98"></bm-button>
              <div slot="dropdown-content" class="p-4 bg-gray-100 border border-gray-300 rounded">
                dropdown content!
              </div>
            </bm-dropdown-shell>
            </bm-button-group>
            <bm-button-dropdown
              id="capo"
              buttonLabel="buttonLabel"
              dataLabel="itemText"
              source={state.capos}
              value={this.currentCapo}
              placeholder="Capo"
              maxHeight={400}
            ></bm-button-dropdown>
        </div>
      </Host>
    );
  }
}
