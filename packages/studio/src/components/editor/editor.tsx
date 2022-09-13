import { Component, h, Element, Host, Prop, Watch } from '@stencil/core';
import {EditorState} from "@codemirror/state"
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "codemirror-lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { language, myHighlightStyle, myTheme, wordHover } from "../../utils/codemirror.utils";

@Component({
  tag: 'pc-editor',
  styleUrl: 'editor.scss',
  shadow: true,
})
export class Editor {
  private view: EditorView;

  @Prop({ mutable: true }) value: string = '';

  @Element() host: HTMLElement;

  extensions() {
    const updateListener = EditorView.updateListener.of((v) => {
      if (v.docChanged) {
        this.value = v.state.doc.toString()
      }
    });

    return [
      language.of(ChordPro()),
      syntaxHighlighting(myHighlightStyle, {fallback: true}),
      keymap.of(defaultKeymap),
      lineNumbers(),
      exampleStringLinter,
      lintGutter(),
      highlightActiveLine(),
      history(),
      updateListener,
      myTheme,
      wordHover
    ];
  }

  connectedCallback() {
    this.view = new EditorView({
      state: EditorState.create({
        doc: this.value,
        extensions: this.extensions()
      }),
      parent:  this.host.shadowRoot,
      root: this.host.shadowRoot,
    })
  }

  // Update text editor content when value changes
  @Watch('value')
  setValue(newValue: string) {
    if (this.currentValue !== newValue) {
      this.view.dispatch({
        changes: { from: 0, to: this.view.state.doc.length, insert: newValue }
      });
    }
  }

  get currentValue() {
    return this.view.state.doc.toString()
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}
