import { Component, Host, h, State, Listen } from '@stencil/core';
import exampleChordPro from '../../utils/example-chordpro'
import Split from 'split.js'

@Component({
  tag: 'pc-editor-split-view',
  styleUrl: 'editor-split-view.scss',
  shadow: true,
})
export class EditorSplitView {

  @State() chordpro: string;

  private editor?: HTMLElement
  private view?: HTMLElement

  @Listen('chordProUpdated')
  todoCompletedHandler(event: CustomEvent<string>) {
    this.chordpro = event.detail
  }

  exampleChordPro = exampleChordPro

  componentDidLoad() {
    Split([this.editor, this.view], {
      sizes: [50, 50],
      minSize: 200,
    })
  }

  render() {
    return (
      <Host>
        <div id="flex">
          <pc-editor ref={el => this.editor = el as HTMLElement} initialValue={this.exampleChordPro}></pc-editor>
          <pc-renderer ref={el => this.view = el as HTMLElement} html={this.chordpro}></pc-renderer>
        </div>
      </Host>
    );
  }

}
