import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, HtmlTableFormatter, Song, ChordProParser, ChordSheetParser, TextFormatter  } from '@praisecharts/chordsheetjs';
import exampleChordPro from '../utils/example-chordpro'
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "@codemirror/lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { formatSong, getAvaliableCaposFromKey, getKeys, parseInput } from "../utils/chordsheetjs.helpers";
import { language, myHighlightStyle, myTheme } from "../utils/codemirror.utils";
interface IStore {
    capo: number;
    html: string;
    currentKey: any;
    keys: any[];
    capos: any[]
    song: Song;
    minor: boolean;
    input: string;
    editorMode: "chordpro" | "chords_over_words";
    editorModes: any;
    parser: ChordProParser | ChordSheetParser;
    formatter: ChordProFormatter | HtmlDivFormatter | HtmlTableFormatter | TextFormatter;
    chordType: 'symbols' | 'numbers' | 'numerals';
    chartType: "chords_and_lyrics" | "lyrics_only" | "song_map" | "chords_only" ;
    mdNotes: boolean;
    songMap: boolean;
    chordDiagrams: boolean;
    rendererMode: "pdf" | "html";
    rendererZoom: string;
    editorView: EditorView;
    editorExtensions: any[];
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
  let song = parseInput(value, state.parser);
  state.html = formatSong(song, state.formatter);
  state.song = song;
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
  let song = parseInput(exampleChordPro, new ChordProParser())
  let capo = 0;
  let currentKey = {
    name: song.key
  }
  // take majorKeys from teh keys config and map each key to an array of objects where there is a name and a value
  let keys = getKeys(true);
  let capos = getAvaliableCaposFromKey(song.key);
  let html = formatSong(song, new HtmlDivFormatter());
  
  return <IStore> {
    input: exampleChordPro,
    song: song,
    html: html,
    capo: capo,
    currentKey: currentKey,
    keys: keys,
    capos: capos,
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
    ],
  };
}

export default state;