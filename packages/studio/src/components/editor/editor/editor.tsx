import { Component, h, Host, Prop } from '@stencil/core';
import state from "../../../stores/editor_store";

@Component({
  tag: 'bm-editor',
  styleUrl: 'editor.css',
  shadow: true,
})
export class Editor {
  @Prop() initialValue: string;

  private setEditorMode = (mode: "chords_over_words" | "chordpro") => {
    state.editorMode = mode;
  }

  render() {
    return (
      <Host>
          <div class="absolute z-10 top-0 right-0 bg-gray-200 pr-0 pt-2 rounded-bl-lg">
            <bm-button-group combined={true}>
              <bm-button 
                size='icon'
                color='secondary'
                startIcon='chords-over-words'
                active={state.editorMode == 'chords_over_words'}
                onClick={() => this.setEditorMode('chords_over_words')}>
              </bm-button>
              <bm-button 
                size='icon'
                color='secondary'
                startIcon='chordpro'
                active={state.editorMode == 'chordpro'}
                onClick={() => this.setEditorMode('chordpro')}>
              </bm-button>
            </bm-button-group>
          </div>
          <bm-text-editor initialValue={state.input}></bm-text-editor>
      </Host>
    );
  }
}

