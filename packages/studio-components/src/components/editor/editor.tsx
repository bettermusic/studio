import { Component, h, Element, Host, Prop, State, EventEmitter, Event } from '@stencil/core';
import {EditorState, Compartment} from "@codemirror/state"
import {EditorView, gutter, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, customTags} from "@codemirror/lang-chordpro"

import {tags} from "@lezer/highlight"
import {HighlightStyle} from "@codemirror/language"

import { ChordProParser, HtmlTableFormatter } from 'chordsheetjs';

@Component({
  tag: 'pc-editor',
  styleUrl: 'editor.scss',
  shadow: true,
})
export class Editor {
  
  @Prop() initialValue: string;
  
  @Element() host: HTMLElement;

  @State() editor: EditorView;

  @State() chordpro: string;

  @Event() chordProUpdated: EventEmitter<string>;

  updateListener = EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      this.renderChordpro(v.state.doc.toString());
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
        backgroundColor: "##3c3f41",
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
    highlightActiveLine(),
    history(),
    gutter({class: "cm-mygutter"}),
    this.updateListener,
    this.myTheme,
  ]

  constructor() {
  }

  componentWillLoad() {
    this.renderChordpro(this.initialValue);
    this.editor = new EditorView({
      state: EditorState.create({
        doc: this.initialValue,
        extensions: this.extensions
      }),
      parent:  this.host.shadowRoot,
    })
  }

  renderChordpro(chordpro) {
    const parser = new ChordProParser();
    const song = parser.parse(chordpro);
    const formatter = new HtmlTableFormatter();
    const disp = formatter.format(song);
    this.chordProUpdated.emit(disp);
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }
}

