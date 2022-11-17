import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, Tag, tags as t} from "@lezer/highlight"

export const ChordProLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Chord: t.keyword,
        Comment: t.lineComment,
        DirectiveName: t.attributeName,
        DirectiveValue: t.attributeValue,
        Title: t.heading1,
        Author: t.meta,
        SectionName: t.name,
        "Section/...": t.heading2,
        Lyric: t.content,
        "{ }": t.brace,
        "[ ]": t.squareBracket,
        ":": t.punctuation,
        Separator: t.separator
      })
    ],
    dialect: "noTitle"
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function ChordPro() {
  return new LanguageSupport(ChordProLanguage)
}

export {exampleStringLinter} from "./lint"
