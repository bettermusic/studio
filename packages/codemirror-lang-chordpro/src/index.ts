import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, Tag, tags as t} from "@lezer/highlight"

export const ChordProLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Chord: t.keyword,
        DirectiveName: t.meta,
        DirectiveValue: t.attributeValue,
        Comment: t.lineComment,
        Lyric: t.content,
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function ChordPro() {
  return new LanguageSupport(ChordProLanguage)
}

export {exampleStringLinter} from "./lint"
