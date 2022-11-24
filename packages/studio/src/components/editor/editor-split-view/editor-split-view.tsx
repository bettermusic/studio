import { Component, Host, h } from '@stencil/core';
import Split from 'split.js'
import state from "../../../stores/editor_store";


@Component({
  tag: 'bm-editor-split-view',
  styleUrl: 'editor-split-view.css',
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
      <Host class="flex flex-col h-screen pb-4">
        <div class="flex-initial flex space-x-6 my-6">
          <bm-editor-mode-dropdown></bm-editor-mode-dropdown>
          <bm-editor-key-dropdown></bm-editor-key-dropdown>
          <bm-editor-capo-dropdown></bm-editor-capo-dropdown>
          <bm-button>Hello</bm-button>
        </div>
        <div class="flex-1 flex">
          <bm-editor ref={el => this.editor = el as HTMLElement}></bm-editor>
          <bm-view ref={el => this.view = el as HTMLElement} html={state.html}></bm-view>
        </div>
      </Host>
    );
  }

}
