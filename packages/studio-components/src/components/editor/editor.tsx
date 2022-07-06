import { Component, h, Element, Host, Prop, State, EventEmitter, Event, Method, Watch } from '@stencil/core';
import {EditorState, Compartment} from "@codemirror/state"
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, customTags, exampleStringLinter} from "@codemirror/lang-chordpro"
import {lintGutter} from "@codemirror/lint"


import {tags} from "@lezer/highlight"
import {HighlightStyle} from "@codemirror/language"

import { ChordProFormatter, ChordProParser, HtmlDivFormatter, Song } from '@praisecharts/chordsheetjs';

@Component({
  tag: 'pc-editor',
  styleUrl: 'editor.scss',
  shadow: true,
})
export class Editor {
  
  @Prop() initialValue: string;

  @Prop() capo: number = 0;
  
  @Element() host: HTMLElement;

  @State() editor: EditorView;

  @State()chordpro: string;

  @State() song: Song;

  @Event() chordProUpdated: EventEmitter<string>;

  updateListener = EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      this.chordpro = v.state.doc.toString();
      this.renderChordpro();
    }
  });

  languageConf = new Compartment

  myTheme = EditorView.theme({
      "&": {
        color: "#c1c1c1",
        backgroundColor: "#2b2b2b"
      },
      ".cm-content": {
        caretColor: "#aeafad"
      },
      ".cm-activeLine": {
        backgroundColor: "#323232"
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#ff6663"
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#224e7a"
      },
      ".cm-gutters": {
        backgroundColor: "#2b2b2b",
        color: "#8a8c8d",
        border: "none"
      }
  }, {dark: true})

  language = new Compartment 

  myHighlightStyle = HighlightStyle.define([
    {tag: customTags.chord, color: "#0481aa"},
    {tag: tags.bracket, color: "#fc6"},
    {tag: tags.meta, color: "#fa7c6c"},
    {tag: tags.comment, color: "#5d6063"}
  ])

  extensions = [
    this.language.of(ChordPro()),
    syntaxHighlighting(this.myHighlightStyle, {fallback: true}),
    keymap.of(defaultKeymap), 
    lineNumbers(), 
    exampleStringLinter,
    lintGutter(),
    highlightActiveLine(),
    history(),
    this.updateListener,
    this.myTheme,
  ]
  
  @Method()
  async setCapo(capoPosition: number) {
    this.song = this.song.setCapo(capoPosition);
    const formatter = new ChordProFormatter();
    const disp = formatter.format(this.song);
    //update this.editor.state.doc to this.chordpro
    let transaction = this.editor.state.update({changes: {from: 0, insert: disp}})
    this.editor.dispatch(transaction)
  }

  @Watch('capo')
  async capoPropHandler(newValue: number) {
    return this.setCapo(newValue);
  }

  constructor() {
  }

  componentWillLoad() {
    this.chordpro = this.initialValue;
    this.renderChordpro();

    this.editor = new EditorView({
      state: EditorState.create({
        doc: this.initialValue,
        extensions: this.extensions
      }),
      parent:  this.host.shadowRoot,
    })
  }

  renderChordpro() {
    const parser = new ChordProParser();
    this.song = parser.parse(this.chordpro);
    const formatter = new HtmlDivFormatter();
    const disp = formatter.format(this.song);
    this.chordProUpdated.emit(disp);
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}

