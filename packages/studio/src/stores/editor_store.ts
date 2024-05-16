import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, Song, ChordProParser, ChordsOverWordsParser, ChordsOverWordsFormatter, PdfFormatter, HtmlFormatter  } from '@bettermusic/chordsheetjs';
import exampleChordPro from '../utils/example-chordpro'
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "codemirror-lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { formatSong, getAvaliableCaposFromKey, getKeys, parseInput } from "../utils/chordsheetjs.helpers";
import { language, myHighlightStyle, myTheme, wordHover } from "../utils/codemirror.utils";
import { createMuPdf } from "mupdf-js";
import pdfConfig from "../utils/pdf-config";

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
    formatter: any;
    html: string;
    svgContent: null|string;
    input: string;
    keys: any[];
    mdNotes: boolean;
    metadata: any;
    minor: boolean;
    pdfConfig: any;
    parser: ChordProParser | ChordsOverWordsParser;
    rendering: boolean;
    rendererMode: "pdf" | "html";
    rendererZoom: string;
    song: Song;
    songMap: boolean;
    edit: boolean;
}

const updateListener = EditorView.updateListener.of((v) => {
  if (v.docChanged) {
    state.input = v.state.doc.toString();
  }
});

const { state, onChange } = createStore<IStore>({
  ...initialState()
});

onChange('input', async (value) => {
  let song = parseInput(value, state.parser, state.metadata);
  state.html = formatSong(song, state.formatter, state.pdfConfig);
  if (state.rendererMode === 'pdf') {
    await generatePdf(state.formatter);
  }
  state.song = song;
});

onChange('rendering', async (value) => {
  if (state.rendererMode === 'pdf') {
    parseInput(state.input, state.parser, state.metadata);
    formatSong(state.song, state.formatter, state.pdfConfig);
    await generatePdf(state.formatter);
  }
  return value;
})

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

async function generatePdf(formatter) {
  const pdfBlob = await formatter.generatePDF();
  const mupdf = await createMuPdf();
  const buf = await pdfBlob.arrayBuffer();
  const arrayBuf = new Uint8Array(buf);
  const doc = mupdf.load(arrayBuf);
  state.svgContent = await mupdf.drawPageAsSVG(doc, 1);
} 

function initialState() {
  let song = parseInput(exampleChordPro, new ChordsOverWordsParser(), { softLineBreaks: true } )
  let capo = 0;
  let currentKey = {
    name: song.key
  }
  // take majorKeys from teh keys config and map each key to an array of objects where there is a name and a value
  let keys = getKeys(true);
  let capos = getAvaliableCaposFromKey(song.key);
  let html = formatSong(song, new HtmlDivFormatter());
  
  return <IStore> {
    edit: true,
    input: exampleChordPro,
    song: song,
    html: html,
    svgContent: null,
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
      title: 'Rattle',
      softLineBreaks: true
    },
    parser: new ChordsOverWordsParser(),
    formatter: new PdfFormatter(),
    pdfConfig: pdfConfig,
    rendererMode: "pdf",
    rendererZoom: "100%",
    rendering: true,
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