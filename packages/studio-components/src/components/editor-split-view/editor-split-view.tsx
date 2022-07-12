import { Component, Host, h } from '@stencil/core';
import Split from 'split.js'
import state from "../../stores/editor_store";


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
          <pc-editor-key-dropdown></pc-editor-key-dropdown>
          <pc-editor-capo-dropdown></pc-editor-capo-dropdown>
        </div>
        <div id="flex">
          <pc-editor ref={el => this.editor = el as HTMLElement} initialValue={state.input}></pc-editor>
          <pc-renderer ref={el => this.view = el as HTMLElement} html={state.html}></pc-renderer>
        </div>
      </Host>
    );
  }

}
