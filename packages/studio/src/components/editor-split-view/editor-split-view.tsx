import { Component, Host, h } from '@stencil/core';
import Split from 'split.js'
import state from "../../stores/editor_store";


@Component({
  tag: 'bm-editor-split-view',
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
          <bm-editor-mode-dropdown></bm-editor-mode-dropdown>
          <bm-editor-key-dropdown></bm-editor-key-dropdown>
          <bm-editor-capo-dropdown></bm-editor-capo-dropdown>
        </div>
        <div id="flex">
          <bm-editor ref={el => this.editor = el as HTMLElement} initialValue={state.input}></bm-editor>
          <bm-renderer ref={el => this.view = el as HTMLElement} html={state.html}></bm-renderer>
        </div>
      </Host>
    );
  }

}
