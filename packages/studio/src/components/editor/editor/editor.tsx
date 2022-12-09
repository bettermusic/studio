import { Component, h, Host, Prop } from '@stencil/core';
import state from "../../../stores/editor_store";

@Component({
  tag: 'bm-editor',
  styleUrl: 'editor.css',
  shadow: true,
})
export class Editor {
  @Prop() initialValue: string;

  render() {
    return (
      <Host>
          <bm-text-editor initialValue={state.input}></bm-text-editor>
      </Host>
    );
  }
}

