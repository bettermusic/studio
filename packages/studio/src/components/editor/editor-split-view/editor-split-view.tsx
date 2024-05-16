import { Component, Host, h } from '@stencil/core';
import Split from 'split-grid'
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
    if (state.edit && !this.splitter)  {
      this.initSplit();
    }

    if (!state.edit && this.splitter)  {
      this.splitter.destroy() 
      this.splitter = null;
    }
  }

  componentDidLoad() {
    state.rendering = false;
  }

  initSplit() {
    this.splitter = Split({
      columnGutters: [{
        track: 1,
        element: document.querySelector('.split-gutter-col-1'),
      }],
    
    })
  }

  render() {
 if (state.rendererMode === 'pdf' && state.svgContent) {
      return (
        <Host>
          <bm-editor-header></bm-editor-header>
          <div class="editor-height split-grid">
            <div style={{display: state.edit ? 'block' : 'none'}} ref={el => this.editor = el as HTMLElement}>
              <bm-editor></bm-editor>
            </div>
            <div class="split-gutter-col split-gutter-col-1"></div>
            <bm-pdf-view class="w-full" ref={el => this.view = el as HTMLElement} svgContent={state.svgContent}></bm-pdf-view>
          </div>
        </Host>
      );
    } else {
      return (
        <Host>
          <bm-editor-header></bm-editor-header>
          <div class="editor-height split-grid">
            <div style={{display: state.edit ? 'block' : 'none'}} ref={el => this.editor = el as HTMLElement}>
              <bm-editor></bm-editor>
            </div>
            <div class="split-gutter-col split-gutter-col-1"></div>
            <bm-view class="w-full" ref={el => this.view = el as HTMLElement} html={state.html} mode={state.rendererMode}></bm-view>
          </div>
        </Host>
      );
    }
  }

}
