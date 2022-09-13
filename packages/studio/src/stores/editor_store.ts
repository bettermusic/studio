import { createStore } from "@stencil/store";
import { ChordProFormatter, HtmlDivFormatter, HtmlTableFormatter, Song, ChordProParser, ChordSheetParser, TextFormatter  } from '@praisecharts/chordsheetjs';
import { formatSong, getAvaliableCaposFromKey, getKeys, parseInput } from "../utils/chordsheetjs.helpers";

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

const { state, onChange } = createStore<IStore>({
  ...initialState()
});

onChange('input', value => {
  state.song = parseInput(value, state.parser, state.metadata);
  state.html = formatSong(state.song, state.formatter);

  if (state.song.key !== state.currentKey?.name) {
    state.currentKey = { name: state.song.key };
    // take majorKeys from teh keys config and map each key to an array of objects where there is a name and a value
    state.keys = getKeys(true);
    state.capos = getAvaliableCaposFromKey(state.song.key);
  }
});

onChange('capo', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.setCapo(value);
  state.input = formatter.format(state.song);
});

onChange('currentKey', value => {
  const formatter = new ChordProFormatter();
  state.song = state.song.changeKey(value);
  state.capos = getAvaliableCaposFromKey(value);
  state.input = formatter.format(state.song);
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
  state.input = formatter.format(state.song);
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
  };
}

export default state;
