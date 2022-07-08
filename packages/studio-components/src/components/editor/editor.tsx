import { Component, h, Element, Host, Prop, State,  Method } from '@stencil/core';
import {EditorState} from "@codemirror/state"
import {EditorView} from "@codemirror/view"
import state from "../../utils/store";

@Component({
  tag: 'pc-editor',
  styleUrl: 'editor.scss',
  shadow: true,
})
export class Editor {
  
  @Prop() initialValue: string;

  @State() capo: number;
  
  @Element() host: HTMLElement;

  @Method()
  async setCapo(capoPosition: number) {
    state.capo = capoPosition;
  }
  
  connectedCallback() {
    if (!state.editorView) {
      
      state.editorView = new EditorView({
          state: EditorState.create({
            doc: state.input,
            extensions: state.editorExtensions
          }),
          parent:  this.host.shadowRoot,
          root: this.host.shadowRoot,
        })
      }
    }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}

