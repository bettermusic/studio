import { Compartment} from "@codemirror/state"
import {EditorView} from "@codemirror/view"
import {HighlightStyle} from "@codemirror/language"
import {customTags} from "codemirror-lang-chordpro"
import {tags} from "@lezer/highlight"

export const myTheme = EditorView.theme({
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

export const language = new Compartment 

export const myHighlightStyle = HighlightStyle.define([
  {tag: customTags.chord, color: "#0481aa"},
  {tag: tags.bracket, color: "#fc6"},
  {tag: tags.meta, color: "#fa7c6c"},
  {tag: tags.comment, color: "#5d6063"}
])