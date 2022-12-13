import { Compartment, Text} from "@codemirror/state"
import {HighlightStyle} from "@codemirror/language"
import {tags} from "@lezer/highlight"
import { hoverTooltip} from "@codemirror/view"
import {EditorView, Panel} from "@codemirror/view"
import {showPanel} from "@codemirror/view"

export const myTheme = EditorView.theme({
    "&": {
      color: "#c1c1c1",
      backgroundColor: "var(--bm-gray-200)"
    },
    ".cm-content": {
      caretColor: "var(--bm-gray-900)"
    },
    ".cm-activeLine": {
      backgroundColor: "var(--bm-gray-300)"
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "var(--bm-gray-800)"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "var(--bm-blue-800)"
    },
    ".cm-gutters": {
      backgroundColor: "var(--bm-gray-200)",
      color: "#8a8c8d",
      border: "none"
    }
}, {dark: true})

export const language = new Compartment

export const myHighlightStyle = HighlightStyle.define([
  {tag: tags.keyword, color: "#0481aa"},
  {tag: tags.attributeName, color: "var(--bm-gray-500)"},
  {tag: tags.attributeValue, color: "var(--bm-color-chord)"},
  {tag: tags.heading1, color: "var(--bm-color-chord)"},
  {tag: tags.name, color: "var(--bm-color-chord)"},
  {tag: tags.heading2, color: "var(--bm-color-chord)"},
  {tag: tags.attributeValue, color: "var(--bm-color-chord)"},
  {tag: tags.separator, color: "var(--bm-green-500)"},
  {tag: tags.lineComment, color: "var(--bm-gray-400)"},
  {tag: tags.content, color: 'var(--bm-gray-700)'},
  {tag: tags.brace, color: "var(--bm-gray-500)"},
  {tag: tags.squareBracket, color: 'var(--bm-blue-700)'},
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
