import { Compartment, Text} from "@codemirror/state"
import {HighlightStyle} from "@codemirror/language"
import {tags} from "@lezer/highlight"
import { hoverTooltip} from "@codemirror/view"
import {EditorView, Panel} from "@codemirror/view"
import {showPanel} from "@codemirror/view"

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
  {tag: tags.keyword, color: "#0481aa"},
  {tag: tags.bracket, color: "#fc6"},
  {tag: tags.meta, color: "#8a8c8d"},
  {tag: tags.attributeValue, color: "#fa7c6c"},
  {tag: tags.lineComment, color: "#5d6063"},
  {tag: tags.content, color: '#fff'}
])

export const wordHover = hoverTooltip((view, pos, side) => {
  let {from, to, text} = view.state.doc.lineAt(pos)
  let start = pos, end = pos
  while (start > from && /\w/.test(text[start - from - 1])) start--
  while (end < to && /\w/.test(text[end - from])) end++
  if (start == pos && side < 0 || end == pos && side > 0)
    return null
  return {
    pos: start,
    end,
    above: true,
    create() {
      let dom = document.createElement("div")
      dom.textContent = text.slice(start - from, end - from)
      return {dom}
    }
  }
})

function wordCountPanel(view: EditorView): Panel {
  let dom = document.createElement("div")
  dom.textContent = countWords(view.state.doc)
  return {
    dom,
    update(update) {
      if (update.docChanged)
        dom.textContent = countWords(update.state.doc)
    }
  }
}

export function wordCounter() {
  return showPanel.of(wordCountPanel)
}

function countWords(doc: Text) {
  let count = 0, iter = doc.iter()
  while (!iter.next().done) {
    let inWord = false
    for (let i = 0; i < iter.value.length; i++) {
      let word = /\w/.test(iter.value[i])
      if (word && !inWord) count++
      inWord = word
    }
  }
  return `Word count: ${count}`
}
