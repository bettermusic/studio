import { createStore } from "@stencil/store";
import { ChordProFormatter, ChordProParser, HtmlDivFormatter, Song } from '@praisecharts/chordsheetjs';
import exampleChordPro from './example-chordpro'
import { Compartment} from "@codemirror/state"
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting, HighlightStyle} from "@codemirror/language"
import {ChordPro, customTags, exampleStringLinter} from "@codemirror/lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import {tags} from "@lezer/highlight"


//make an interface for the store
interface IStore {
    chordpro: string;
    song: Song;
    capo: number;
    html: string;
    editorView: EditorView;
    editorExtensions: any[];
}

const updateListener = EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      state.chordpro = v.state.doc.toString();
    }
});

const myTheme = EditorView.theme({
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

const language = new Compartment 

const myHighlightStyle = HighlightStyle.define([
  {tag: customTags.chord, color: "#0481aa"},
  {tag: tags.bracket, color: "#fc6"},
  {tag: tags.meta, color: "#fa7c6c"},
  {tag: tags.comment, color: "#5d6063"}
])

const extensions = [
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
]

const { state, onChange } = createStore<IStore>({
    ...initialState(exampleChordPro)
});

onChange('chordpro', value => {
    state.html = renderChordpro(value);
});

onChange('capo', value => {
    const formatter = new ChordProFormatter();
    state.song = state.song.setCapo(value);
    state.chordpro = formatter.format(state.song);
    let transaction = state.editorView.state.update({changes: {from: 0, insert: state.chordpro}});
    state.editorView.dispatch(transaction);
});

function parseChordpro(chordpro) {
    const parser = new ChordProParser();
    return parser.parse(chordpro);
}

function formatSong(song) {
    const formatter = new HtmlDivFormatter();
    return formatter.format(song);
}

function renderChordpro(chordpro) {    
    const song = parseChordpro(chordpro);
    return formatSong(song);
}

function initialState(chordpro: string) {
    let song = parseChordpro(chordpro)
    let capo = 0;
    let html = formatSong(song);

    return <IStore> {
        chordpro: chordpro,
        song: song,
        html: html,
        capo: capo,
        editorExtensions: extensions,
    };
}

export default state;