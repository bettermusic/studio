import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, HtmlTableFormatter, Song, ChordProParser, ChordsOverWordsParser, ChordsOverWordsFormatter  } from '@bettermusic/chordsheetjs';
import exampleChordPro from '../utils/example-chordpro'
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
    editorView: EditorView | null;
    formatter: ChordProFormatter | HtmlDivFormatter | HtmlTableFormatter | ChordsOverWordsFormatter;
    html: string;
    input: string;
    keys: any[];
    mdNotes: boolean;
    metadata: any;
    minor: boolean;
    parser: ChordProParser | ChordsOverWordsParser;
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
  let song = parseInput(value, state.parser, state.metadata);
  state.html = formatSong(song, state.formatter);
  state.song = song;
});

onChange('capo', value => {
  let formatter;
  if (state.editorMode === 'chordpro') {
     formatter = new ChordProFormatter();
  } else {
     formatter = new ChordsOverWordsFormatter();
  }
  state.song = state.song.setCapo(value);
  let input = formatter.format(state.song);
  let docLength = state.editorView.state.doc.length;
  let transaction = state.editorView.state.update({changes: {from: 0, to: docLength, insert: input}});
  state.editorView.dispatch(transaction);
  state.input = input;
});

onChange('currentKey', value => {
  let formatter;
  if (state.editorMode === 'chordpro') {
     formatter = new ChordProFormatter();
  } else {
     formatter = new ChordsOverWordsFormatter();
  }
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
    formatter = new ChordsOverWordsFormatter();
    state.parser = new ChordsOverWordsParser();
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
  let song = parseInput(exampleChordPro, new ChordsOverWordsParser() )
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
    editorMode: "chords_over_words",
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
    metadata: {
      title: "Test Song",
      key: currentKey,
      capo: capo,
      artist: "test Artist"
    },
    parser: new ChordsOverWordsParser(),
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