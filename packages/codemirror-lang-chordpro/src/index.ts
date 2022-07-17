import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, Tag, tags as t} from "@lezer/highlight"

export const customTags = {
  chord: Tag.define(), // define custom tag, that can be picked up by the style configuration
}

export const ChordProLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Chord: customTags.chord,
        MetaData: t.meta,
        Comment: t.comment,
        Bracket: t.squareBracket,
        String: t.string,
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "//"}
  }
})

export function ChordPro() {
  return new LanguageSupport(ChordProLanguage)
}

export {exampleStringLinter} from "./lint"
