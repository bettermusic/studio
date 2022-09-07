import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, HtmlTableFormatter, Song, ChordProParser, ChordSheetParser, TextFormatter  } from '@praisecharts/chordsheetjs';
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "codemirror-lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { formatSong, getAvaliableCaposFromKey, getKeys, parseInput } from "../utils/chordsheetjs.helpers";
import { language, myHighlightStyle, myTheme, wordHover } from "../utils/codemirror.utils";
interface IStore {
    capo: number;
    capos: any[]
    chartType: "chords_and_lyrics" | "lyrics_only" | "song_map" | "chords_only" ;
    chordDiagrams: boolean;
    chordType: 'symbols' | 'numbers' | 'numerals';
    currentKey: any;
    editorExtensions: any[];
    editorMode: "chordpro" | "chords_over_words";
    editorModes: any;
    editorView: EditorView;
    formatter: ChordProFormatter | HtmlDivFormatter | HtmlTableFormatter | TextFormatter;
    html: string;
    input: string;
    keys: any[];
    mdNotes: boolean;
    metadata: any;
    minor: boolean;
    parser: ChordProParser | ChordSheetParser;
    rendererMode: "pdf" | "html";
    rendererZoom: string;
    song: Song;
    songMap: boolean;
}

const updateListener = EditorView.updateListener.of((v) => {
  if (v.docChanged) {
    state.input = v.state.doc.toString();
  }
});

const { state, onChange } = createStore<IStore>({
  ...initialState()
});

onChange('input', value => {
  state.song = parseInput(value, state.parser, state.metadata);
  state.html = formatSong(state.song, state.formatter);

  if (state.song.key !== state.currentKey.name) {
    state.currentKey = { name: state.song.key };
    // take majorKeys from teh keys config and map each key to an array of objects where there is a name and a value
    state.keys = getKeys(true);
    state.capos = getAvaliableCaposFromKey(state.song.key);
  }
});

onChange('capo', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.setCapo(value);
  let input = formatter.format(state.song);
  let docLength = state.editorView.state.doc.length;
  let transaction = state.editorView.state.update({changes: {from: 0, to: docLength, insert: input}});
  state.editorView.dispatch(transaction);
  state.input = input;
});

onChange('currentKey', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.changeKey(value);
  state.capos = getAvaliableCaposFromKey(value);
  let input = formatter.format(state.song);
  let docLength = state.editorView.state.doc.length;
  let transaction = state.editorView.state.update({changes: {from: 0, to: docLength, insert: input}});
  state.editorView.dispatch(transaction);
  state.input = input;
});

onChange('editorMode', value => {
  let formatter;
  if (value === "chords_over_words") {
    formatter = new TextFormatter();
    state.parser = new ChordSheetParser({ preserveWhitespace: false });
  }
  if (value === "chordpro") {
    formatter = new ChordProFormatter();
    state.parser = new ChordProParser();
  }
  let input = formatter.format(state.song);
  let docLength = state.editorView.state.doc.length;
  let transaction = state.editorView.state.update({changes: {from: 0, to: docLength, insert: input}});
  state.editorView.dispatch(transaction);
  state.input = input;
});

function initialState() {
  return <IStore> {
    input: '',
    song: null,
    html: '',
    capo: 0,
    currentKey: null,
    keys: [],
    capos: [],
    minor: false,
    editorMode: "chordpro",
    editorModes: [
      {
        label: 'ChordPro',
        mode: 'chordpro',
      },
      {
        label: 'Chords Over Words',
        mode: 'chords_over_words',
      }
    ],
    parser: new ChordProParser(),
    formatter: new HtmlDivFormatter(),
    rendererMode: "pdf",
    rendererZoom: "100%",
    editorView: null,
    editorExtensions: [
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
    ],
  };
}

export default state;
