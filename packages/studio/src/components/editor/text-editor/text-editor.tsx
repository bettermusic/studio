import { Component, h, Element, Host, Prop, State,  Method } from '@stencil/core';
import {EditorState} from "@codemirror/state"
import {EditorView} from "@codemirror/view"
import state from "../../../stores/editor_store";

@Component({
  tag: 'bm-text-editor',
  styleUrl: 'text-editor.css',
})
export class Editor {
  
  @Prop() initialValue: string;

  @State() capo: number;
  
  @Element() host: HTMLElement;

  @Method()
  async setCapo(capoPosition: number) {
    state.capo = capoPosition;
  }
  
  componentWillLoad() {
    if (!state.editorView) {
      state.editorView = new EditorView({
          state: EditorState.create({
            doc: state.input,
            extensions: state.editorExtensions
          }),
          parent:  this.host,
        })
      }
  }

  disconnectedCallback() {
    state.editorView.destroy();
    state.editorView = null;
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}

