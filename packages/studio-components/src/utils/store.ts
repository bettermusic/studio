import { createStore } from "@stencil/store";
import { ChordProFormatter, Key, Song } from '@praisecharts/chordsheetjs';
import exampleChordPro from './example-chordpro'
import {EditorView, highlightActiveLine, keymap, lineNumbers} from "@codemirror/view"
import {defaultKeymap, history} from "@codemirror/commands"
import {syntaxHighlighting} from "@codemirror/language"
import {ChordPro, exampleStringLinter} from "@codemirror/lang-chordpro"
import {lintGutter} from "@codemirror/lint"
import { formatSong, parseChordpro, renderChordpro } from "./chordsheetjs.utils";
import { language, myHighlightStyle, myTheme } from "./codemirror.utils";


//make an interface for the store
interface IStore {
    chordpro: string;
    song: Song;
    capo: number;
    html: string;
    key: Key;
    editorView: EditorView;
    editorExtensions: any[];
}

const updateListener = EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      state.chordpro = v.state.doc.toString();
    }
});

const { state, onChange } = createStore<IStore>({
    ...initialState()
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

function initialState() {
    let song = parseChordpro(exampleChordPro)
    let capo = 0;
    let html = formatSong(song);

    return <IStore> {
        chordpro: exampleChordPro,
        song: song,
        html: html,
        capo: capo,
        editorView: null, // must be initialized in the editor component so it can be easily attached to dom
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