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
      gutterSize: 8,
    })
  }

  render() {
    return (
      <Host>
        <bm-editor-header></bm-editor-header>
        <div class="editor-height flex-1 flex">
          <bm-editor ref={el => this.editor = el as HTMLElement}></bm-editor>
          <bm-view ref={el => this.view = el as HTMLElement} html={state.html}></bm-view>
        </div>
      </Host>
    );
  }

}
