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
  private splitter: any

  componentWillRender() {
    if (!state.edit) {
      this.view.style.width = '100%'
    }
  }

  componentDidRender() {
    // this.chordpro = this.html
    console.log(state.edit, this.splitter)
    if (state.edit && !this.splitter)  {
      this.initSplit();
    }

    if (!state.edit && this.splitter)  {
      this.splitter.destroy() 
      this.splitter = null;
    }
  }

  initSplit() {
    this.splitter = Split([this.editor, this.view], {
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
          <div style={{display: state.edit ? 'block' : 'none'}} ref={el => this.editor = el as HTMLElement}>
            <bm-editor></bm-editor>
          </div>
          <bm-view class="w-full" ref={el => this.view = el as HTMLElement} html={state.html}></bm-view>
        </div>
      </Host>
    );
  }

}
