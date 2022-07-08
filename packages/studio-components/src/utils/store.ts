import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, HtmlTableFormatter, Song, ChordProParser, ChordSheetParser, TextFormatter  } from '@praisecharts/chordsheetjs';
import exampleChordPro from './example-chordpro'
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "@codemirror/lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { formatSong, getAvaliableCaposFromKey, getKeys, parseChordpro, renderChordpro } from "./chordsheetjs.helpers";
import { language, myHighlightStyle, myTheme } from "./codemirror.utils";
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
  state.html = renderChordpro(value);
});

onChange('capo', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.setCapo(value);
  state.input = formatter.format(state.song);
  let transaction = state.editorView.state.update({changes: {from: 0, insert: state.input}});
  state.editorView.dispatch(transaction);
});

onChange('currentKey', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.changeKey(value);
  state.capos = getAvaliableCaposFromKey(value);
  state.input = formatter.format(state.song);
  let transaction = state.editorView.state.update({changes: {from: 0, insert: state.input}});
  state.editorView.dispatch(transaction);
});

function initialState() {
  let song = parseChordpro(exampleChordPro)
  let capo = 0;
  let currentKey = {
    name: song.key
  }
  // take majorKeys from teh keys config and map each key to an array of objects where there is a name and a value
  let keys = getKeys(true);
  let capos = getAvaliableCaposFromKey(song.key);
  console.log(capos);
  let html = formatSong(song);
  
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
    parser: new ChordProParser(),
    formatter: new ChordProFormatter(),
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