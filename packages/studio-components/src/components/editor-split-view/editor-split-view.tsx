import { Component, Host, h } from '@stencil/core';
import Split from 'split.js'
import state from "../../utils/store";


@Component({
  tag: 'pc-editor-split-view',
  styleUrl: 'editor-split-view.scss',
})
export class EditorSplitView {

  private editor?: HTMLElement
  private view?: HTMLElement

  componentDidLoad() {
    // this.chordpro = this.html
    Split([this.editor, this.view], {
      sizes: [50, 50],
      minSize: 0,
    })
  }

  render() {
    return (
      <Host>
        <div class="controls">
          <pc-dropdown dataLabel="name" dataId="name" source={state.keys} placeholder="Keys"></pc-dropdown>
          <pc-dropdown dataLabel="position" dataId="position" source={state.capos} placeholder="Capo"></pc-dropdown>
        </div>
        <div id="flex">
          <pc-editor ref={el => this.editor = el as HTMLElement} initialValue={state.chordpro}></pc-editor>
          <pc-renderer ref={el => this.view = el as HTMLElement} html={state.html}></pc-renderer>
        </div>
      </Host>
    );
  }

}
